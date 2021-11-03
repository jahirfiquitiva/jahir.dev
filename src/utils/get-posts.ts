/* eslint-disable */
import { pick } from '~/utils/pick';

import { allBlogs } from '.contentlayer/data';
import type { Blog } from '.contentlayer/types';

export const getAllPosts = (fields: (keyof Blog)[] = []): Array<Blog> => {
  const filteredPosts = allBlogs
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
    .filter(
      (it) => it.title?.length > 0 && it.slug?.length > 0 && !it.inProgress,
    );
  return fields && fields.length
    ? filteredPosts.map((post) => pick(post, fields))
    : filteredPosts;
};
