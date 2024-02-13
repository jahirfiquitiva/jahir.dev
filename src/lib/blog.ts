import { readdir } from 'fs/promises';
import path from 'path';

import matter from 'gray-matter';
import readingTime from 'reading-time';

import { getBlurData, type BlurResult } from '@/utils/blur';

const allowInProgress = process.env.NODE_ENV === 'development';

export interface PartialBlog {
  slug: string;
  title: string;
  summary: string;
  date: string;
  color: string;
  hero: string;
  heroSource?: string;
  link?: string;
  inProgress?: boolean;
  readingTime: number;
  heroMeta?: BlurResult | null;
}

export interface Blog extends PartialBlog {
  keywords: Array<string>;
  content: string;
}

export const sortBlogPostsByDate = (a: PartialBlog, b: PartialBlog) =>
  new Date(b.date).getTime() - new Date(a.date).getTime();

let allPosts: Blog[] = []; // Cache posts
export async function getAllPosts(): Promise<Array<Blog>> {
  if (!allPosts.length) {
    const files = await readdir(path.join(process.cwd(), 'content'));
    const posts = await Promise.all(files.map(getPost));
    allPosts = posts
      .sort(sortBlogPostsByDate)
      .filter((it) => (allowInProgress ? true : !it.inProgress));
  }
  return allPosts;
}

const getActualHeroUrl = (hero?: string) =>
  hero ? (hero.startsWith('http') ? hero : `/media/blog/${hero}`) : '';

const getKeywords = (keywords?: string): Array<string> => {
  if (!keywords) return [];
  let filteredKeywords: Array<string> = [];
  try {
    filteredKeywords = keywords.split(',').map((it: string) => it.trim());
  } catch (e) {}
  return Array.from(new Set([...filteredKeywords]));
};

const getPost = async (file: string): Promise<Blog> => {
  const { data, content } = matter.read(
    path.join(process.cwd(), 'content', file),
  );
  const slug = path.basename(file, '.mdx');
  const hero = getActualHeroUrl(data.hero || `${slug}/hero.jpg`);
  return {
    slug,
    title: data.title,
    summary: data.summary,
    date: data.date,
    color: data.color,
    hero,
    heroSource: data.heroSource,
    link: data.link,
    inProgress: data.inProgress,
    readingTime: readingTime(content).minutes,
    heroMeta: await getBlurData(hero),
    keywords: getKeywords(data.keywords),
    content,
  };
};
