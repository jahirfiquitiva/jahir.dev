import fs from 'fs';
import path from 'path';

import { getReadingTime } from '@/utils/reading-time';
import { unique } from '@/utils/unique';
import { getBlurData } from 'config/mdx/rehype/image-metadata';

interface BlogPostMetadata {
  title: string;
  date: string;
  color: string;
  excerpt?: string;
  hero?: string;
  heroSource?: string;
  link?: string;
  inProgress?: boolean;
  keywords?: Array<string>;
  readingTime: string;
  heroMeta?: {
    blur64?: string;
    size: { width: number; height: number };
  } | null;
}

const getActualHeroUrl = (hero?: string) =>
  hero ? (hero.startsWith('http') ? hero : `/static/images/blog/${hero}`) : '';

const parseFrontmatter = async (fileContent: string) => {
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
      metadata['keywords'] = unique([...filteredKeywords]);
    } else if (metaKey === 'readingTime') {
      // skip
    } else if (metaKey === 'heroMeta') {
      // skip
    } else metadata[metaKey] = value;
  });
  metadata['readingTime'] = getReadingTime(content);
  // metadata['heroMeta'] = await getBlurData(metadata['hero']).catch(null);
  return { metadata: metadata as BlogPostMetadata, content };
};

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx');
}

function readMDXFile(filePath: string) {
  const rawContent = fs.readFileSync(filePath, 'utf-8');
  return parseFrontmatter(rawContent);
}

export type Blog = BlogPostMetadata & {
  slug: string;
  content?: string;
};

const getMDXData = async (dir: string): Promise<Array<Blog>> => {
  const mdxFiles = getMDXFiles(dir);
  const promises = mdxFiles.map(async (file) => {
    const { metadata, content } = await readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));
    return {
      ...metadata,
      slug,
      content,
    };
  });
  return Promise.all(promises).catch();
};

export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), 'content'));
}
