import type { Blog } from 'contentlayer/generated';

export const sortBlogPostsByDate = (a: Blog, b: Blog) =>
  new Date(b.date).getTime() - new Date(a.date).getTime();
