import { allBlogs, type Blog } from 'contentlayer/generated';

const allowInProgress = process.env.NODE_ENV === 'development';
export const getAllPosts = (): Array<Blog> => {
  const filteredPosts = allBlogs
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
    .filter(
      (it: Blog) =>
        it.title?.length > 0 &&
        it.slug?.length > 0 &&
        (allowInProgress || !it.inProgress),
    );
  return filteredPosts;
};
