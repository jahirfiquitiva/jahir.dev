import { Suspense } from 'react';

import { LinkButton } from '@/components/link-button';
import { Section } from '@/components/section';
import { BlogPostItem } from '@/components/views/blog/item';
import { allReadableBlogs } from '@/utils/blog';
import { getColoredTextClasses } from '@/utils/colored-text';
import cx from '@/utils/cx';
import { getStaticMetadata } from '@/utils/metadata';
import { buildOgImageUrl } from '@/utils/og';

import Loading from '../loading';

import { groupBlogPosts } from './utils';

const allowInProgress = process.env.NODE_ENV === 'development';
const blogPostsGroups = groupBlogPosts(
  allReadableBlogs
    .filter((it) => allowInProgress || !it.inProgress)
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date))),
);

const BlogPostsGroups = async () => {
  return (
    <Suspense fallback={<Loading />}>
      {blogPostsGroups.map((group) => (
        <li className={'block'} key={group.year}>
          <Section
            id={`posts-from-${group.year}`}
            title={`Posts from ${group.year}`}
            aria-label={`Posts from ${group.year}`}
          >
            <div className={'flex items-end gap-3 mt-3 w-full'}>
              <h2 className={'text-lg font-manrope font-bold leading-none'}>
                {group.year}
              </h2>
              <hr
                className={
                  'w-full border-none m-0 -mt-0.5 h-px bg-divider flex-1'
                }
              />
            </div>
            <ol className={'flex flex-col gap-1.5'}>
              {group.posts?.map((post) => (
                <li className={'block'} key={post.slug}>
                  <BlogPostItem post={post} />
                </li>
              ))}
            </ol>
          </Section>
        </li>
      ))}
    </Suspense>
  );
};

export default function BlogPage() {
  return (
    <Section id={'blog'} className={'gap-8'}>
      <div className={'flex flex-row gap-4 items-center justify-between'}>
        <h1
          className={getColoredTextClasses('yellow', 'yellow', 'orange', false)}
        >
          Blog
        </h1>
        <LinkButton
          title={'Resume'}
          href={'/feed.xml'}
          openInNewTab
          className={cx(
            'self-start pr-4',
            'bg-orange-600 dark:bg-orange-500',
            'hocus:bg-orange-700 dark:hocus:bg-orange-400',
            'ring-orange-700 dark:ring-orange-600',
            'hocus:ring-orange-800 dark:hocus:ring-orange-500',
          )}
        >
          <svg
            viewBox={'0 0 24 24'}
            role={'presentation'}
            className={'size-5'}
            aria-hidden={'true'}
          >
            <path
              className={'fill-current'}
              d={
                // eslint-disable-next-line max-len
                'M6.18,15.64A2.18,2.18 0 0,1 8.36,17.82C8.36,19 7.38,20 6.18,20C5,20 4,19 4,17.82A2.18,2.18 0 0,1 6.18,15.64M4,4.44A15.56,15.56 0 0,1 19.56,20H16.73A12.73,12.73 0 0,0 4,7.27V4.44M4,10.1A9.9,9.9 0 0,1 13.9,20H11.07A7.07,7.07 0 0,0 4,12.93V10.1Z'
              }
            ></path>
          </svg>
          <span>RSS Feed</span>
        </LinkButton>
      </div>

      <ol className={'flex flex-col gap-6'}>
        <BlogPostsGroups />
      </ol>
    </Section>
  );
}

export const metadata = getStaticMetadata({
  title: 'Blog – Jahir Fiquitiva',
  description:
    // eslint-disable-next-line max-len
    'Blog posts by Jahir Fiquitiva. Here I share some thoughts, stories, information and more about software development, programming, tech or my personal life',
  exactUrl: 'https://jahir.dev/blog',
  keywords: [
    'tech',
    'software',
    'development',
    'thoughts',
    'opinions',
    'blog',
    'content',
    'story',
    'storytelling',
    'news',
  ],
  image: buildOgImageUrl('blog'),
});
