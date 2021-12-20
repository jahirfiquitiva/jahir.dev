import { ComputedFields, defineDocumentType } from 'contentlayer/source-files';
import readingTime from 'reading-time';

import random from './../src/lib/random';
import unique from './../src/lib/unique';
import { defaultKeywords } from './../src/types';
import { getPostDescription } from './../src/utils/posts';
import { getBlurData } from './image-metadata';

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

const getActualHeroUrl = (hero?: string) =>
  hero ? (hero.startsWith('http') ? hero : `/static/images/blog/${hero}`) : '';

const computedFields: ComputedFields = {
  readingTime: { type: 'json', resolve: (doc) => readingTime(doc.body.raw) },
  slug: {
    type: 'string',
    // eslint-disable-next-line no-underscore-dangle
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ''),
  },
  hero: {
    type: 'string',
    resolve: (doc) => {
      return getActualHeroUrl(doc.hero);
    },
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
      return unique([...filteredKeywords, ...defaultKeywords]);
    },
  },
  excerpt: {
    type: 'string',
    resolve: (doc) =>
      getPostDescription(doc.body.raw, doc.excerpt || doc.description),
  },
  color: {
    type: 'string',
    resolve: (doc) => doc.color || random(defaultColors),
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
  filePathPattern: 'blog/*.mdx',
  bodyType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'string', required: true },
    hero: { type: 'string', required: true },
    color: { type: 'string' },
    description: { type: 'string' },
    excerpt: { type: 'string' },
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
