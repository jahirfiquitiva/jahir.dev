/* eslint-disable */
import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

import { SimpleBlogPost } from '~/types';
import getRandomItemFrom from '~/utils/get-random-item';
import { getTableOfContents, getReadingTime } from '~/utils/get-post-data';
import { getPostDescription } from './get-post-data';

const basePath = process.cwd();

export const getPostSlugs = (directory: string = 'posts'): string[] => {
  const postsDirectory = join(basePath, directory);
  return fs.readdirSync(postsDirectory);
};

type BaseObject = { [key: string]: string };
type InternalBlogPost = BaseObject & SimpleBlogPost;

const defaultColors = [
  '#fc5c65',
  '#fd9644',
  '#f7b731',
  '#26de81',
  '#2bcbba',
  '#45aaf2',
  '#4b7bec',
  '#a55eea',
  '#778ca3',
];

export function getPostBySlug(
  slug: string,
  fields: string[] = [],
  directory: string = 'posts',
): InternalBlogPost {
  const realSlug = slug.replace(/\.md$/, '');
  const postsDirectory = join(basePath, directory);
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items: { [key: string]: any } = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'excerpt') {
      items[field] = getPostDescription(
        data.excerpt || data.description,
        content,
      );
    } else if (field === 'slug') {
      items[field] = data.slug || realSlug;
    } else if (field === 'content' || field === 'body') {
      items[field] = content;
    } else if (field === 'toc') {
      items['tableOfContents'] = getTableOfContents(content);
    } else if (field === 'color') {
      items[field] = data.color || getRandomItemFrom(defaultColors);
    } else if (field === 'time') {
      items['readingTime'] = getReadingTime(content);
    } else if (field === 'hero') {
      const { hero } = data;
      const actualHero: string = hero
        ? hero.startsWith('http')
          ? hero
          : `/static/images/posts/${hero}`
        : '';
      items['hero'] = actualHero;
    } else if (data[field]) {
      items[field] = data[field];
    }
  });

  return items as InternalBlogPost;
}

export function getAllPosts(
  fields: string[] = [],
  directory: string = 'posts',
) {
  const slugs = getPostSlugs(directory);
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields, directory))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
    .filter(
      (it) => it.title?.length > 0 && it.slug?.length > 0 && !it.inProgress,
    );
  return posts;
}
