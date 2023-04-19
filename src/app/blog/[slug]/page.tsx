import Icon from '@mdi/react';
import { cx } from 'classix';
import type { Metadata } from 'next';

import { Divider } from '@/components/core/divider';
import { ButtonLink } from '@/components/core/link';
import { mdiPencilOutline } from '@/components/icons';
import { Mdx } from '@/components/views/mdx/mdx';
import { Reactions } from '@/components/views/mdx/ui/reactions';
import { ShareButton } from '@/components/views/mdx/ui/share-button';
import { ReactionsProvider } from '@/providers/reactions-provider';
import { RequestContext } from '@/types/request';
import { allReadableBlogs, getBlog } from '@/utils/blogs';
import { getStaticMetadata } from '@/utils/metadata';
import { buildOgImageUrl } from '@/utils/og';
import { type Blog } from 'contentlayer/generated';

import Hero from './hero';

type BlogPageContext = RequestContext<{ slug?: string }>;

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

export default function BlogPostPage(context: BlogPageContext) {
  const post = getBlog(context.params.slug);
  if (!post) return null;
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
        <Mdx code={post?.body?.code} />
        <Divider
          className={cx(
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

export async function generateStaticParams() {
  return allReadableBlogs.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata(
  context: BlogPageContext,
): Promise<Metadata | undefined> {
  const post = getBlog(context.params.slug);
  if (!post) return undefined;

  const { title, date, excerpt, hero, slug } = post;

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
