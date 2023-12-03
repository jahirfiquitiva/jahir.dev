import fs from 'fs';
import path from 'path';

import readingTime from 'reading-time';
import type { ReadTimeResults } from 'reading-time';

import { getBlurData } from './rehype/image-metadata';
import { getPostDescription } from './utils/get-post-desc';
import { unique } from './utils/unique';

interface DefaultFrontmatter {
  title: string;
  date: string;
  color: string;
  excerpt?: string;
  hero?: string;
  heroSource?: string;
  link?: string;
  inProgress?: boolean;
  devToId?: number;
  keywords?: string;
}

interface ParsedFrontmatter extends Omit<DefaultFrontmatter, 'keywords'> {
  slug: string;
  keywords?: Array<string>;
  longExcerpt?: string;
  year?: number;
  heroMeta?: Awaited<ReturnType<typeof getBlurData>> | null;
  readingTime?: ReadTimeResults;
}

const getFrontmatterAndContent = (fileContent: string) => {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(fileContent);
  const frontMatterBlock = match![1];
  const content = fileContent.replace(frontmatterRegex, '').trim();
  const frontMatterLines = frontMatterBlock.trim().split('\n');
  const metadata: Partial<DefaultFrontmatter> = {};

  frontMatterLines.forEach((line) => {
    const [key, ...valueArr] = line.split(': ');
    let value = valueArr.join(': ').trim();
    value = value.replace(/^['"](.*)['"]$/, '$1'); // Remove quotes
    // @ts-expect-error IDK
    metadata[key.trim() as keyof DefaultFrontmatter] = value;
  });

  return { frontmatter: metadata as DefaultFrontmatter, content };
};

const getActualHeroUrl = (hero?: string) =>
  hero ? (hero.startsWith('http') ? hero : `/static/images/blog/${hero}`) : '';

const parseFrontmatter = async (
  defaultFrontmatter: DefaultFrontmatter,
  content: string,
): Promise<Omit<ParsedFrontmatter, 'slug'>> => {
  const docKeywords: string = (defaultFrontmatter.keywords ?? '') || '';
  let filteredKeywords: Array<string> = [];
  try {
    filteredKeywords = docKeywords
      ?.split('|')
      ?.map((it: string) => it.trim())
      ?.filter((it: string) => it.length > 0);
  } catch (e) {}
  const uniqueKeywords = unique([...filteredKeywords]);

  let year = 0;
  try {
    const date = new Date(defaultFrontmatter.date);
    year = date.getFullYear();
  } catch (e) {
    year = 0;
  }

  return {
    ...defaultFrontmatter,
    keywords: uniqueKeywords,
    hero: getActualHeroUrl(defaultFrontmatter.hero),
    excerpt: getPostDescription(content, defaultFrontmatter.excerpt, true),
    longExcerpt: getPostDescription(content, defaultFrontmatter.excerpt),
    readingTime: readingTime(content),
    year,
    heroMeta: await getBlurData(getActualHeroUrl(defaultFrontmatter.hero)),
  };
};

const getMDXFiles = (dir: string) => {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx');
};

const readMDXFile = (filePath: string) => {
  return fs.readFileSync(filePath, 'utf-8');
};

const parseMDX = async (dir: string, file: string) => {
  const { frontmatter: defaultFrontmatter, content } = getFrontmatterAndContent(
    readMDXFile(path.join(dir, file)),
  );
  const slug = path.basename(file, path.extname(file));
  const parsedFrontmatter = await parseFrontmatter(defaultFrontmatter, content);
  const frontmatter: ParsedFrontmatter = {
    ...parsedFrontmatter,
    slug,
  };
  return {
    ...frontmatter,
    content,
  };
};

export type Blog = Awaited<ReturnType<typeof parseMDX>>;

const getMDXData = async (dir: string) => {
  const mdxFiles = getMDXFiles(dir);
  const promises = mdxFiles.map((file) => parseMDX(dir, file));
  const settledPromises = await Promise.allSettled(promises);
  // settledPromises
  //   .filter((it) => it.status === 'rejected')
  //   .forEach((rej) => {
  //     console.error(rej);
  //   });
  return (
    settledPromises.filter((it) => it.status === 'fulfilled') as Array<
      PromiseFulfilledResult<Blog> | undefined
    >
  )
    .map((it) => it?.value)
    .filter(Boolean) as Array<Blog>;
};

const hiddenBlogs = ['about', 'donate', 'uses'];

interface MDXBlogOptions {
  checkHidden?: boolean;
}

export const getBlogPosts = async (options?: MDXBlogOptions) => {
  const blogs = await getMDXData(path.join(process.cwd(), 'content'));
  if (options?.checkHidden) return blogs;
  return blogs.filter((it) => !hiddenBlogs.includes(it.slug));
};

export const getBlogPost = async (
  slug: string | undefined,
  options?: MDXBlogOptions,
): Promise<Blog | undefined> => {
  const allBlogPosts = await getBlogPosts(options);
  const post = allBlogPosts.find((it) => it.slug === slug);
  if (post?.inProgress) return undefined;
  return post;
};
