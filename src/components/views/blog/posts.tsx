import { cx } from 'classix';

import type { Blog } from 'config/blog/blog';

import { ViewsCounter } from '../mdx/ui/views/counter';

import { BlogPostCard } from './card/card';

interface BlogPostsProps {
  posts: Array<{
    year: number;
    posts: Array<Blog>;
  }>;
  loading?: boolean;
}

export const BlogPosts = (props: BlogPostsProps) => {
  const { posts: groupedPosts, loading } = props;
  return (
    <>
      {groupedPosts.map((group) => {
        return (
          <section
            key={`posts-from-${group.year}`}
            id={`posts-from-${group.year}`}
            title={`Posts from ${group.year}`}
            aria-label={`Posts from ${group.year}`}
            className={'flex flex-col mt-12 mb-8 gap-16 tablet-md:gap-20'}
          >
            <div
              className={'flex items-end gap-16 mt-6 mb-4 leading-none w-full'}
            >
              <h4>{group.year}</h4>
              <hr className={'w-full border-none m-0 h-1 bg-divider flex-1'} />
            </div>
            <ul className={'list-none flex flex-col gap-16'}>
              {(group.posts || []).map((post, index) => {
                return (
                  <li
                    key={
                      post.slug ||
                      // eslint-disable-next-line newline-per-chained-call
                      `${post.title
                        ?.toLowerCase()
                        .split(' ')
                        .join('-')}-${index}`
                    }
                  >
                    <BlogPostCard
                      post={post}
                      className={cx(loading ? 'motion-safe:animate-pulse' : '')}
                      viewsCounter={
                        !post.link && !loading ? (
                          <ViewsCounter
                            slug={`blog--${post.slug}`}
                            inProgress={post.inProgress}
                            $sm
                          />
                        ) : null
                      }
                    />
                  </li>
                );
              })}
            </ul>
          </section>
        );
      })}
    </>
  );
};
