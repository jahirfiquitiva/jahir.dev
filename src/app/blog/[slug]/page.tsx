import Icon from '@mdi/react';
import { cx } from 'classix';
import { type Blog } from 'contentlayer/generated';
import type { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import { Suspense } from 'react';

import { ButtonLink } from '@/components/core/link/button-link';
import { mdiPencilOutline } from '@/components/icons/mdi';
import { Mdx } from '@/components/views/mdx/mdx';
import { Reactions } from '@/components/views/mdx/ui/reactions/reactions';
import { ShareButton } from '@/components/views/mdx/ui/share-button';
import { ReactionsProvider } from '@/providers/reactions-provider';
import { allReadableBlogs, getBlog } from '@/utils/blog';
import { getStaticMetadata } from '@/utils/metadata';
import { buildOgImageUrl } from '@/utils/og';

import Loading from '../../loading';

import Hero from './hero';
import type { BlogPostPageContext } from './types';

const blogPostStructuredData = (post: Blog): string =>
  JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    datePublished: post.date,
    dateModified: post.date,
    description: post.excerpt,
    image: buildOgImageUrl('blog', post.title, post.hero),
    url: `https://jahir.dev/blog/${post.slug}`,
    author: {
      '@type': 'Person',
      name: 'Jahir Fiquitiva',
    },
  });

const BlogPostContent = async (props: { slug: string }) => {
  const post = await getBlog(props.slug);
  if (!post) return notFound();
  if (post.link) return redirect(post.link);
  return (
    <Suspense fallback={<Loading />}>
      <Mdx code={post.body.code} />
    </Suspense>
  );
};

export default async function BlogPostPage(context: BlogPostPageContext) {
  const { slug, post } = context.params;

  if (!slug || !post) return notFound();
  if (post.link) return redirect(post.link);

  return (
    <>
      <ReactionsProvider
        slug={`blog--${post.slug}`}
        inProgress={post.inProgress}
      >
        <Reactions />
        <Hero
          title={post.title}
          hero={post.hero}
          meta={post.heroMeta}
          source={post.heroSource}
        />
        <BlogPostContent slug={slug} />
        <hr
          className={cx(
            'my-20 mx-0 h-1 w-full',
            'border-none border-0 bg-divider',
            'overflow-hidden desktop:my-28',
            '-mx-14 w-[calc(100%+1.75rem)]',
            'tablet-md:mx-0 tablet-md:w-full',
          )}
        />
        <div
          className={cx(
            'flex flex-col-reverse',
            'gap-24',
            'mt-0 mb-16',
            'tablet-md:mt-2 tablet-md:mb-8',
            'tablet-md:flex-row tablet-md:items-center',
            'tablet-md:justify-between',
          )}
        >
          <div className={'flex gap-12'}>
            <ShareButton title={post.title} slug={post.slug} />
            <ButtonLink
              outlined
              title={'Edit blog post content on GitHub'}
              href={`https://github.com/jahirfiquitiva/jahir.dev/edit/main/content/${post.slug}.mdx`}
            >
              <Icon path={mdiPencilOutline} size={0.9} />
              <span>Edit on GitHub</span>
            </ButtonLink>
          </div>
          <Reactions />
        </div>
      </ReactionsProvider>
      <script type={'application/ld+json'} suppressHydrationWarning>
        {blogPostStructuredData(post)}
      </script>
    </>
  );
}

export const generateStaticParams = () =>
  allReadableBlogs.map((post) => ({ slug: post.slug, post }));

export async function generateMetadata(
  context: BlogPostPageContext,
): Promise<Metadata | undefined> {
  const { slug, post } = context.params;
  if (!slug || !post) return undefined;

  const { title, date, excerpt, hero } = post;

  const ogImage = buildOgImageUrl('blog', title, hero);

  const metadata = getStaticMetadata({
    title: `${title} | Blog – Jahir Fiquitiva`,
    description: excerpt || 'Blog post by Jahir Fiquitiva',
    image: ogImage,
    exactUrl: `https://jahir.dev/blog/${slug}`,
  });
  return {
    ...metadata,
    openGraph: { ...metadata.openGraph, type: 'article', publishedTime: date },
  };
}
