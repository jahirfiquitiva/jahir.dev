import {
  defineDocumentType,
  type ComputedFields,
  type LocalDocument,
} from 'contentlayer/source-files';
import readingTime from 'reading-time';

import { getBlurData } from './rehype/blur';

const getActualHeroUrl = (hero?: string) =>
  hero ? (hero.startsWith('http') ? hero : `/media/blog/${hero}`) : '';

const getSlug = (doc: LocalDocument): string =>
  doc._raw.sourceFileName.replace(/\.mdx$/, '');

const computedFields: ComputedFields = {
  readingTime: {
    type: 'number',
    resolve: (doc) => readingTime(doc.body.raw).minutes,
  },
  slug: {
    type: 'string',
    resolve: getSlug,
  },
  hero: {
    type: 'string',
    resolve: (doc) => getActualHeroUrl(doc.hero || `${getSlug(doc)}/hero.jpg`),
  },
  seoKeywords: {
    type: 'list',
    resolve: (doc) => {
      const docKeywords: string = (doc.keywords ?? '') || '';
      let filteredKeywords: Array<string> = [];
      try {
        filteredKeywords = docKeywords
          .split(',')
          .map((it: string) => it.trim());
      } catch (e) {}
      return Array.from(new Set([...filteredKeywords]));
    },
  },
  heroMeta: {
    type: 'json',
    resolve: async (doc) => {
      return getBlurData(
        getActualHeroUrl(doc.hero || `${getSlug(doc)}/hero.jpg`),
      );
    },
  },
};

const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: '*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    summary: { type: 'string', required: true },
    date: { type: 'string', required: true },
    color: { type: 'string', required: true },
    keywords: { type: 'string', required: true },
    hero: { type: 'string' },
    heroSource: { type: 'string' },
    link: { type: 'string' },
    inProgress: { type: 'boolean' },
    // devToId: { type: 'number' },
  },
  computedFields,
}));

export default Blog;
