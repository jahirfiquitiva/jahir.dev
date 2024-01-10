import { Suspense } from 'react';

import { Section } from '@/components/atoms/section';
import { BlogPostItem } from '@/components/views/blog/item';
import { RSSFeedButton } from '@/components/views/blog/rss-feed-button';
import {
  ViewsCounter,
  ViewsCounterFallback,
} from '@/components/views/blog/views-counter';
import { getViews } from '@/db/queries';
import {
  allSimpleBlogs,
  sortBlogPostsByDate,
  type SimpleBlog,
} from '@/utils/blog';
import { getColoredTextClasses } from '@/utils/colored-text';
import { getDate } from '@/utils/date';
import { createMetadata } from '@/utils/metadata';
import { buildOgImageUrl } from '@/utils/og';

const allowInProgress = process.env.NODE_ENV === 'development';

async function Views(props: { slug: string }) {
  const dbSlug = `blog--${props.slug}`;
  const views = await getViews(dbSlug); //.catch(() => 0);
  return <ViewsCounter views={views} />;
}

export default function BlogPage() {
  const blogPostsByYear = allSimpleBlogs
    .filter((it) => allowInProgress || !it.inProgress)
    .reduce<Record<number, Array<SimpleBlog>>>((acc, post) => {
      const year = (getDate(post.date) || new Date()).getFullYear();
      return { ...acc, [year]: [...(acc[year] || []), post] };
    }, {});
  return (
    <Section id={'blog'} className={'gap-6'}>
      <div className={'flex flex-row gap-4 items-center justify-between'}>
        <h1 className={getColoredTextClasses('orange', 'yellow', 'orange')}>
          Blog
        </h1>
        <RSSFeedButton />
      </div>
      <ol className={'flex flex-col gap-6'}>
        {Object.entries(blogPostsByYear)
          .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
          .map(([year, posts]) => (
            <li className={'block'} key={year}>
              <Section
                id={`posts-from-${year}`}
                title={`Posts from ${year}`}
                aria-label={`Posts from ${year}`}
              >
                <div className={'flex items-end gap-3 mt-3 w-full'}>
                  <h2 className={'text-lg font-manrope font-bold leading-none'}>
                    {year}
                  </h2>
                  <hr
                    className={
                      'w-full border-none m-0 -mt-0.5 h-px bg-divider flex-1'
                    }
                  />
                </div>
                <ol className={'flex flex-col gap-1.5'}>
                  {posts.sort(sortBlogPostsByDate).map((post) => (
                    <li className={'block'} key={post.slug}>
                      <BlogPostItem
                        post={post}
                        viewsCounter={
                          <Suspense fallback={<ViewsCounterFallback />}>
                            <Views slug={post.slug} />
                          </Suspense>
                        }
                      />
                    </li>
                  ))}
                </ol>
              </Section>
            </li>
          ))}
      </ol>
    </Section>
  );
}

export const metadata = createMetadata({
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
