import { ComputedFields, defineDocumentType } from 'contentlayer/source-files';
import readingTime from 'reading-time';

import random from './../src/lib/random';
import unique from './../src/lib/unique';
import { defaultKeywords } from './../src/types';
import { getPostDescription } from './../src/utils/posts';

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
      const { hero } = doc;
      const actualHero: string = hero
        ? hero.startsWith('http')
          ? hero
          : `/static/images/blog/${hero}`
        : '';
      return actualHero;
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
    resolve: (doc) => getPostDescription(doc.body.raw, doc.excerpt, true),
  },
  longExcerpt: {
    type: 'string',
    resolve: (doc) => getPostDescription(doc.body.raw, doc.excerpt),
  },
  color: {
    type: 'string',
    resolve: (doc) => doc.color || random(defaultColors),
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
    excerpt: { type: 'string' },
    longExcerpt: { type: 'string' },
    link: { type: 'string' },
    inProgress: { type: 'boolean' },
    keywords: { type: 'string' },
  },
  computedFields,
}));

export default Blog;
