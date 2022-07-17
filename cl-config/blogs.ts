import { ComputedFields, defineDocumentType } from 'contentlayer/source-files';
// eslint-disable-next-line import/no-extraneous-dependencies
import readingTime from 'reading-time';

import { getRandomItem as random } from './../src/utils/tools/random';
import unique from './../src/utils/tools/unique';
import { getBlurData } from './image-metadata';
import { getPostDescription } from './utils/get-post-desc';

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

const idChars =
  'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split('');

const getActualHeroUrl = (hero?: string) =>
  hero ? (hero.startsWith('http') ? hero : `/static/images/blog/${hero}`) : '';

const generateRandomId = (length: number = 6) => {
  let retVal = '';
  for (let i = 0; i < length; ++i) {
    retVal += random(idChars);
  }
  return retVal;
};
const secretPostsId = generateRandomId();

const computedFields: ComputedFields = {
  readingTime: { type: 'json', resolve: (doc) => readingTime(doc.body.raw) },
  slug: {
    type: 'string',
    resolve: (doc) => {
      // eslint-disable-next-line no-underscore-dangle
      const defaultSlug = doc._raw.sourceFileName.replace(/\.mdx$/, '');
      if (!doc.inProgress) return defaultSlug;
      const secretSlug = `${defaultSlug}-${secretPostsId}`;
      // eslint-disable-next-line no-console
      console.log(`Generated secret slug: [${secretSlug}]`);
      return secretSlug;
    },
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
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'string', required: true },
    hero: { type: 'string' },
    color: { type: 'string' },
    description: { type: 'string' },
    excerpt: { type: 'string' },
    longExcerpt: { type: 'string' },
    link: { type: 'string' },
    inProgress: { type: 'boolean' },
    keywords: { type: 'string' },
    year: { type: 'number' },
    devToId: { type: 'number' },
    heroMeta: { type: 'json' },
    fullHeightHero: { type: 'boolean', default: false },
  },
  computedFields,
}));

export default Blog;
