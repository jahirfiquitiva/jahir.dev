import fs from 'fs';
import path from 'path';

import readingTime from 'reading-time';

interface BlogPostMetadata {
  title: string;
  date: string;
  color: string;
  summary: string;
  hero?: string;
  heroSource?: string;
  link?: string;
  inProgress?: boolean;
  keywords?: Array<string>;
  readingTime?: number;
}

const getActualHeroUrl = (hero?: string) =>
  hero ? (hero.startsWith('http') ? hero : `/media/blog/${hero}`) : '';

const parseFrontmatter = (fileContent: string) => {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(fileContent);
  const frontMatterBlock = match![1];
  const content = fileContent.replace(frontmatterRegex, '').trim();
  const frontMatterLines = frontMatterBlock.trim().split('\n');
  const metadata: Partial<BlogPostMetadata> = {};
  frontMatterLines.forEach((line) => {
    const [key, ...valueArr] = line.split(': ');
    let value = valueArr.join(': ').trim();
    value = value.replace(/^['"](.*)['"]$/, '$1'); // Remove quotes
    const metaKey = key.trim() as keyof BlogPostMetadata;

    if (metaKey === 'inProgress') {
      metadata['inProgress'] = value === 'true';
    } else if (metaKey === 'hero') {
      metadata['hero'] = getActualHeroUrl(value);
    } else if (metaKey === 'keywords') {
      const docKeywords: string = value || '';
      let filteredKeywords: Array<string> = [];
      try {
        filteredKeywords = docKeywords
          ?.split('|')
          ?.map((it: string) => it.trim())
          ?.filter((it: string) => it.length > 0);
      } catch (e) {}
      metadata['keywords'] = Array.from(new Set([...filteredKeywords]));
    } else if (metaKey === 'readingTime') {
      // Skip. It won't be defined in frontmatter
    } else metadata[metaKey] = value;
  });
  metadata['readingTime'] = readingTime(content).minutes;
  return { metadata: metadata as BlogPostMetadata, content };
};

const getMDXFiles = (dir: string) => {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx');
};

const readMDXFile = (filePath: string) => {
  const rawContent = fs.readFileSync(filePath, 'utf-8');
  return parseFrontmatter(rawContent);
};

export type Blog = BlogPostMetadata & {
  slug: string;
  content?: string;
};

const getMDXData = (dir: string): Array<Blog> =>
  getMDXFiles(dir).map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));
    return {
      ...metadata,
      slug,
      content,
    };
  });

export const getBlogPosts = () =>
  getMDXData(path.join(process.cwd(), 'content'));
