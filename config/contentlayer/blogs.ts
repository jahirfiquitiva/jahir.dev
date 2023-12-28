import {
  type ComputedFields,
  defineDocumentType,
} from 'contentlayer/source-files';
import readingTime from 'reading-time';

import { unique } from './../../src/utils/unique';
import { getBlurData } from './rehype/image-metadata';

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
    color: { type: 'string', required: true },
    excerpt: { type: 'string', required: true },
    hero: { type: 'string' },
    heroSource: { type: 'string' },
    link: { type: 'string' },
    inProgress: { type: 'boolean' },
    devToId: { type: 'number' },
    keywords: { type: 'string' },
  },
  computedFields,
}));

export default Blog;
