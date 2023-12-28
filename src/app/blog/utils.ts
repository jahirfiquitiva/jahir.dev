import type { Blog } from 'contentlayer/generated';

import { groupBy } from '@/utils/group-by';

interface BlogGroup {
  year: number;
  posts: Array<Blog>;
}

export const groupBlogPosts = (
  blogPosts: Array<Blog> | undefined,
  query: string | undefined | null = null,
): Array<BlogGroup> => {
  if (!blogPosts) return [];
  const filteredPosts = !query
    ? blogPosts
    : blogPosts?.filter(
        (post) =>
          post?.title.toLowerCase().includes(query.toLowerCase()) ||
          post?.excerpt?.toLowerCase().includes(query.toLowerCase()),
      );
  const groups = groupBy(filteredPosts, (post) => {
    return new Date(post.date).getFullYear();
  });
  return Object.keys(groups)
    .map((year) => ({
      year: +year,
      posts: groups[+year],
    }))
    .sort((a, b) => Number(b.year) - Number(a.year));
};
