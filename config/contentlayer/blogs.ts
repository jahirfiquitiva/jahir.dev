import { ComputedFields, defineDocumentType } from 'contentlayer/source-files';
import readingTime from 'reading-time';

import { getBlurData } from './rehype/image-metadata';
import { getPostDescription } from './utils/get-post-desc';
import { unique } from './utils/unique';

const getActualHeroUrl = (hero?: string) =>
  hero ? (hero.startsWith('http') ? hero : `/static/images/blog/${hero}`) : '';

const computedFields: ComputedFields = {
  readingTime: { type: 'json', resolve: (doc) => readingTime(doc.body.raw) },
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
    excerpt: { type: 'string' },
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
