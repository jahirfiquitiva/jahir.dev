import { groupBy } from '@/utils';
import type { Post } from '@/types';

export interface BlogGroup {
  year: number;
  posts: Array<Post>;
}

export const groupBlogPosts = (
  blogPosts: Array<Post> | undefined,
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
    return post.year || new Date(post.date).getFullYear();
  });
  return Object.keys(groups)
    .map((year) => ({
      year: +year,
      posts: groups[+year],
    }))
    .sort((a, b) => Number(b.year) - Number(a.year));
};
