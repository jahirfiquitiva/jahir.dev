import type { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';

import { Section } from '@/components/core/section';
import { Mdx } from '@/components/views/mdx/mdx';
import { Reactions } from '@/components/views/mdx/ui/reactions';
import { ReactionsProvider } from '@/providers/reactions';
import { RequestData } from '@/types/request';
import { getStaticMetadata } from '@/utils/metadata';
import { buildOgImageUrl } from '@/utils/og';
import { allBlogs as generatedBlogs } from 'contentlayer/generated';

import Header from './header';
import Hero from './hero';

const allBlogs = generatedBlogs.filter((it) => it.slug !== 'about');

type BlogPageData = RequestData<{ slug?: string }>;

export default async function Blog(data: BlogPageData) {
  const post = allBlogs.find((post) => post.slug === data.params.slug);
  if (!post) return notFound();
  if (post.link) return redirect(post.link);

  return (
    <Section className={'gap-16'}>
      <Header title={post.title} color={post.color} />
      <ReactionsProvider slug={post.slug}>
        <Reactions />
        <Hero
          title={post.title}
          hero={post.hero}
          meta={post.heroMeta}
          source={post.heroSource}
        />
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
