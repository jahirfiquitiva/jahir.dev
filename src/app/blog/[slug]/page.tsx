import type { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import type { CSSProperties } from 'react';

import { Heading } from '@/components/core/heading';
import { Link } from '@/components/core/link';
import { Section } from '@/components/core/section';
import { Mdx } from '@/components/views/mdx/mdx';
import { Reactions } from '@/components/views/mdx/ui/reactions';
import { ReactionsProvider } from '@/providers/reactions';
import { RequestData } from '@/types/request';
import { getReadableColor } from '@/utils/color/get-readable-color';
import { hexToRGB } from '@/utils/color/hex-to-rgb';
import { getStaticMetadata } from '@/utils/metadata';
import { buildOgImageUrl } from '@/utils/og';
import { allBlogs as generatedBlogs } from 'contentlayer/generated';
import { Img } from '@/components/core/img';

const allBlogs = generatedBlogs.filter((it) => it.slug !== 'about');

type BlogPageData = RequestData<{ slug?: string }>;

export default async function Blog(data: BlogPageData) {
  const post = allBlogs.find((post) => post.slug === data.params.slug);
  if (!post) return notFound();
  if (post.link) return redirect(post.link);

  const shadowColor = hexToRGB(post.color, 0.36);
  const readableColor = getReadableColor(post.color, true);
  return (
    <Section className={'gap-16'}>
      <Link
        href={'/blog'}
        title={'Navigate back to blog posts list page'}
        className={'inline-flex items-end gap-8 leading-none py-4'}
      >
        <span className={'font-manrope font-bold mb-1'}>{'<-'}</span>
        <span>Back to blog posts</span>
      </Link>
      <Heading
        className={'tracking-wide dark:text-[var(--text-color)]'}
        style={
          {
            '--text-color': readableColor || 'var(--color-primary-txt)',
            '--text-shadow-color': shadowColor || 'var(--color-shadow-brand)',
          } as CSSProperties
        }
      >
        {post.title}
      </Heading>
      <ReactionsProvider slug={post.slug}>
        <Reactions />
        <figure className={'my-20'}>
          <Img
            src={post.hero || ''}
            alt={`Hero image for blog post "${post.title}"`}
            className={'aspect-[2/1] h-auto rounded-8'}
            quality={100}
            priority
            {...(post.heroMeta
              ? {
                  placeholder: 'blur',
                  blurDataURL: post.heroMeta.blur64,
                  width: post.heroMeta.size.width || 666,
                  height: post.heroMeta.size.height || 375,
                }
              : {})}
          />
          {post.heroSource ? <figcaption>{post.heroSource}</figcaption> : null}
        </figure>
        <Mdx code={post?.body?.code} />
      </ReactionsProvider>
    </Section>
  );
}

export async function generateStaticParams() {
  return allBlogs.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata(
  data: BlogPageData,
): Promise<Metadata | undefined> {
  const post = allBlogs.find((post) => post.slug === data.params.slug);
  if (!post) return undefined;

  const { title, date, excerpt, hero, slug } = post;

  const ogImage = buildOgImageUrl('blog', title, `blog/${hero}`);

  const metadata = getStaticMetadata({
    title,
    description: excerpt || 'Blog post by Jahir Fiquitiva',
    image: ogImage,
    exactUrl: `https://jahir.dev/blog/${slug}`,
  });
  return {
    ...metadata,
    openGraph: { ...metadata.openGraph, type: 'article', publishedTime: date },
  };
}
