import { ComputedFields, defineDocumentType } from 'contentlayer/source-files';
import readingTime from 'reading-time';

import { getBlurData } from './rehype/image-metadata';
import { getPostDescription } from './utils/get-post-desc';
import { unique } from './utils/unique';

const getActualHeroUrl = (hero?: string) =>
  hero ? (hero.startsWith('http') ? hero : `/static/images/blog/${hero}`) : '';

const computedFields: ComputedFields = {
  readingTime: { type: 'json', resolve: (doc) => readingTime(doc.body.raw) },
  slug: {
    type: 'string',
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ''),
  },
  hero: {
    type: 'string',
    resolve: (doc) => getActualHeroUrl(doc.hero),
  },
  keywords: {
    type: 'list',
    resolve: (doc) => {
      const docKeywords: string = (doc?.keywords ?? '') || '';
      let filteredKeywords: Array<string> = [];
      try {
        filteredKeywords = docKeywords
          ?.split('|')
          ?.map((it: string) => it.trim())
          ?.filter((it: string) => it.length > 0);
      } catch (e) {}
      return unique([...filteredKeywords]);
    },
  },
  excerpt: {
    type: 'string',
    resolve: (doc) =>
      getPostDescription(doc.body.raw, doc.excerpt || doc.description, true),
  },
  longExcerpt: {
    type: 'string',
    resolve: (doc) =>
      getPostDescription(doc.body.raw, doc.excerpt || doc.description),
  },
  year: {
    type: 'number',
    resolve: (doc) => {
      try {
        const date = new Date(doc.date);
        return date.getFullYear();
      } catch (e) {
        return 0;
      }
    },
  },
  heroMeta: {
    type: 'json',
    resolve: async (doc) => {
      return getBlurData(getActualHeroUrl(doc.hero));
    },
  },
};

const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: '*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'string', required: true },
    hero: { type: 'string' },
    heroSource: { type: 'string' },
    color: { type: 'string', required: true },
    description: { type: 'string' },
    excerpt: { type: 'string' },
    longExcerpt: { type: 'string' },
    link: { type: 'string' },
    inProgress: { type: 'boolean' },
    keywords: { type: 'string' },
    year: { type: 'number' },
    devToId: { type: 'number' },
    heroMeta: { type: 'json' },
  },
  computedFields,
}));

export default Blog;
