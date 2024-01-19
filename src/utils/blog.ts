import { allBlogs, type Blog } from 'contentlayer/generated';

const allowInProgress = process.env.NODE_ENV === 'development';
export const allReadableBlogs = allBlogs.filter((it) =>
  allowInProgress ? true : !it.inProgress,
);

export const sortBlogPostsByDate = (a: Blog, b: Blog) =>
  new Date(b.date).getTime() - new Date(a.date).getTime();
