/* eslint-disable */
import fs from 'fs';
import { join } from 'path';

import matter from 'gray-matter';

import { BlogPost } from '~/types/blog-post';
import getRandomItemFrom from '~/utils/get-random-item';
import { getTableOfContents, getReadingTime } from '~/utils/get-post-data';

const postsDirectory = join(process.cwd(), 'posts');
export const getPostSlugs = (): string[] => {
  return fs.readdirSync(postsDirectory);
};

type BaseObject = { [key: string]: string };
type InternalBlogPost = BaseObject & BlogPost;

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
): InternalBlogPost {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items: { [key: string]: any } = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'excerpt') {
      items[field] = data.excerpt || data.description || null;
    } else if (field === 'slug') {
      items[field] = data.slug || realSlug;
    } else if (field === 'content') {
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

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
    .filter(
      (it) => it.title?.length > 0 && it.slug?.length > 0 && !it.inProgress,
    );
  return posts;
}
