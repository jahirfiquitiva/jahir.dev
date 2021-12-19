import groupBy from '~/lib/group-by';
import { Post } from '~/types';

export interface BlogPostGroup {
  year: number;
  posts: Array<Post>;
}

export const sortBlogPosts = (
  blogPosts: Array<Post> | undefined,
  query: string | undefined | null = null,
): Array<BlogPostGroup> => {
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
