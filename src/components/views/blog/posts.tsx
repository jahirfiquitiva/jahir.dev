import type { Blog } from 'contentlayer/generated';

import { ViewsCounter } from '../mdx/ui/views';

import { BlogPostCard } from './card';

interface BlogPostsProps {
  posts: Array<{
    year: number;
    posts: Array<Blog>;
  }>;
}

export const BlogPosts = (props: BlogPostsProps) => {
  const { posts: groupedPosts } = props;
  return (
    <>
      {groupedPosts.map((group) => {
        return (
          <section
            key={`posts-from-${group.year}`}
            id={`posts-from-${group.year}`}
            title={`Posts from ${group.year}`}
            aria-label={`Posts from ${group.year}`}
            className={'flex flex-col my-28 gap-16 tablet-md:gap-20'}
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
                        .toLowerCase()
                        .split(' ')
                        .join('-')}-${index}`
                    }
                  >
                    <BlogPostCard
                      post={post}
                      viewsCounter={
                        !post.link ? (
                          // @ts-expect-error Server Component
                          <ViewsCounter
                            slug={`blog--${post.slug}`}
                            devToId={
                              post.devToId ? post.devToId.toString() : undefined
                            }
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
