/* eslint-disable */
import fs from 'fs';
import { join } from 'path';

import matter from 'gray-matter';
import readingTime from 'reading-time';
import removeMd from 'remove-markdown';

import { BlogPost } from '~/types/blog-post';
import getRandomItemFrom from '~/utils/get-random-item';

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

export const getPostDescription = (
  description?: string,
  content?: string,
  defaultDescription?: string,
): string => {
  if (description && (description?.length || 0) > 0) return description;
  if (!content || (content?.length || 0) <= 0) {
    return defaultDescription || '';
  }
  const noTitles = content
    ?.split(/[\r\n]+/gm)
    ?.filter((it: string) => !it.startsWith('#'))
    ?.join('  ')
    ?.trim();
  const plainText = removeMd(noTitles);
  const noNewLines = plainText.replace(/[\r\n]+/gm, '  ').trim();
  const splitContent = noNewLines.substring(0, 140);
  return splitContent.length > 0
    ? `${splitContent}...`
    : defaultDescription || '';
};

export const getTableOfContents = (body?: string): string | null => {
  if (!body || !body.length) return null;
  const lines = body
    .split(/\r\n|\n\r|\n|\r/)
    .filter((it) => it.trim().startsWith('#'));
  let mainTitle = '';
  for (const line of lines) {
    const titleHashtags = line.trim().substring(0, line.lastIndexOf('#') + 1);
    if (titleHashtags.length < mainTitle.length || mainTitle.length <= 0) {
      mainTitle = titleHashtags;
    }
  }
  let titleIndex = 0;
  const tableOfContents = lines
    .map((line) => {
      let title = line.substring(mainTitle.length).trim();
      let indent = '';
      if (!title.startsWith('#')) {
        titleIndex += 1;
        indent = `${titleIndex}. `;
      } else {
        const split = title.split('#');
        title = split.pop()?.trim() ?? '';
        indent = `   ${split.join('  ')}* `;
      }
      if (!title || !title.length) return null;
      const slug = title.toLowerCase().replace(/\W/g, '-');
      return `${indent}[${title}](#${slug})`;
    })
    .filter((it) => it && it.length > 0);
  return tableOfContents.join('\n');
};

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
      const calculatedTime = readingTime(content);
      items['readingTime'] = calculatedTime?.time > 0 ? calculatedTime : null;
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
