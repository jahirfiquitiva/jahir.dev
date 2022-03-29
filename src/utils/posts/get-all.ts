import pick from './../../lib/pick';

import { allBlogs, Blog } from 'contentlayer/generated';

export const getAllPosts = (
  fields: (keyof Blog)[] = [],
  allowInProgress: boolean = false,
): Array<Blog> => {
  const filteredPosts = allBlogs
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
    .filter(
      (it: Blog) =>
        it.title?.length > 0 &&
        it.slug?.length > 0 &&
        (allowInProgress || !it.inProgress),
    );
  return fields && fields.length
    ? filteredPosts.map((post: Blog) => pick(post, fields))
    : filteredPosts;
};
