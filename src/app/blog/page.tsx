import { Suspense } from 'react';

import { Section } from '@/components/section';
import { BlogPostItem } from '@/components/views/blog/item';
import { RSSFeedButton } from '@/components/views/blog/rss-feed-button';
import { allReadableBlogs } from '@/utils/blog';
import { getColoredTextClasses } from '@/utils/colored-text';
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
          className={getColoredTextClasses('orange', 'yellow', 'orange', false)}
        >
          Blog
        </h1>
        <RSSFeedButton />
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
