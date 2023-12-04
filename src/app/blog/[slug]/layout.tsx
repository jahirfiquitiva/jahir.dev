import Icon from '@mdi/react';
import { cx } from 'classix';
import type { Blog } from 'contentlayer/generated';
import type { PropsWithChildren } from 'react';

import { ButtonLink } from '@/components/core/link/button-link';
import { Link } from '@/components/core/link/link';
import { Section } from '@/components/core/section';
import { mdiPencilOutline } from '@/components/icons/mdi';
import { Reactions } from '@/components/views/mdx/ui/reactions/reactions';
import { ShareButton } from '@/components/views/mdx/ui/share-button';
import { ReactionsProvider } from '@/providers/reactions-provider';
import { getBlog } from '@/utils/blog';
import { buildOgImageUrl } from '@/utils/og';

import Header from './header';
import Hero from './hero';
import Stats from './stats';
import type { BlogPostPageContext } from './types';

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
  const post = getBlog(slug);
  return (
    <Section id={'blog-post'}>
      <Link
        href={'/blog'}
        title={'Navigate back to blog posts list page'}
        className={'inline-flex items-end gap-8 leading-none py-4'}
      >
        <span className={'font-manrope font-bold mb-1'}>{'<-'}</span>
        <span>Back to blog posts</span>
      </Link>
      {post ? (
        <>
          <Header title={post.title} color={post.color} />
          <Stats
            slug={post.slug}
            date={post.date}
            readingTime={post.readingTime}
            inProgress={post.inProgress}
          />
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
            {props.children}
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
      ) : null}
    </Section>
  );
}
