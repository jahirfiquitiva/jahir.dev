import type { PropsWithChildren } from 'react';

import { Icon } from '@/components/icon';
import { OutlinedLinkButton } from '@/components/link-button';
import { ReactionsButtons } from '@/components/views/blog/reactions';
import { ShareButton } from '@/components/views/blog/share-button';
import { getBlog } from '@/utils/blog';
import cx from '@/utils/cx';
import { buildOgImageUrl } from '@/utils/og';
import type { Blog } from 'contentlayer/generated';

import { Header } from './header';
import { Hero } from './hero';
import type { BlogPostPageContext } from './types';
import { Zoom } from './zoom';

const blogPostStructuredData = (post: Blog): string =>
  post
    ? JSON.stringify({
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
      })
    : '';

export default async function BlogPostLayout(
  props: PropsWithChildren & BlogPostPageContext,
) {
  const { slug } = props.params;
  const post = await getBlog(slug);
  if (!post) return null;
  return (
    <>
      <Header post={post} />
      <Hero
        title={post.title}
        hero={post.hero}
        meta={post.heroMeta}
        source={post.heroSource}
      />
      {props.children}
      <hr
        className={cx(
          'm-0 border-none h-px w-full bg-divider',
          '-mt-7 mobile-lg:-mt-6 tablet-sm:-mt-5',
          '-mb-14',
          '-mx-2.5 w-[calc(100%_+_1.25rem)]',
          'mobile-lg:-mx-3 mobile-lg:w-[calc(100%_+_1.5rem)]',
          'tablet-md:mx-0 tablet-md:w-full',
        )}
      />
      <div
        className={cx(
          'flex flex-col-reverse gap-8',
          'tablet-md:flex-row tablet-md:items-center',
          'justify-between tablet-md:gap-4',
          'pt-7 mobile-lg:pt-8 tablet-sm:pt-9',
        )}
      >
        <div className={'flex flex-row items-center gap-2.5 tablet-md:gap-3'}>
          <ShareButton title={'Share blog post'} slug={slug || ''} />
          <OutlinedLinkButton
            title={'Edit blog post'}
            href={`https://github.com/jahirfiquitiva/jahir.dev/edit/main/content/${slug}/index.mdx`}
            className={'pr-4'}
          >
            <Icon
              className={'size-5'}
              path={
                // eslint-disable-next-line max-len
                'M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z'
              }
            />
            <span>Edit on GitHub</span>
          </OutlinedLinkButton>
        </div>
        <ReactionsButtons slug={slug || ''} />
        <Zoom />
      </div>
      <script type={'application/ld+json'} suppressHydrationWarning>
        {blogPostStructuredData(post)}
      </script>
    </>
  );
}
