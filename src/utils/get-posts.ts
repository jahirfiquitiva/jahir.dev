/* eslint-disable */
import fs from 'fs';
import { join } from 'path';

import { pick } from '~/utils/pick';

import { allBlogs } from '.contentlayer/data';
import type { Blog } from '.contentlayer/types';

const basePath = process.cwd();

export const getPostSlugs = (directory: string = 'posts'): string[] => {
  const postsDirectory = join(basePath, directory);
  return fs.readdirSync(postsDirectory);
};

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
