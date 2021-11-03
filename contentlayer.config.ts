/* eslint-disable import/no-extraneous-dependencies */
import rehypeToc from '@jsdevtools/rehype-toc';
import {
  ComputedFields,
  defineDocumentType,
  makeSource,
} from 'contentlayer/source-files';
import { bundleMDX } from 'mdx-bundler';
import readingTime from 'reading-time';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

import { defaultKeywords, RehypeElement } from './src/types';
import {
  getPostDescription,
  getTableOfContents,
} from './src/utils/get-post-data';
import getRandomItemFrom from './src/utils/get-random-item';
import { unique } from './src/utils/unique';

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
  wordCount: {
    type: 'number',
    resolve: (doc) => doc.body.raw.split(/\s+/gu).length,
  },
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
          : `https://jahir.dev/static/images/posts/${hero}`
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
    resolve: (doc) =>
      getPostDescription(doc.excerpt || doc.description, doc.body.raw),
  },
  color: {
    type: 'string',
    resolve: (doc) => doc.color || getRandomItemFrom(defaultColors),
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
    description: { type: 'string' },
    link: { type: 'string' },
    keywords: {
      type: 'list',
      of: { type: 'string' },
    },
    inProgress: { type: 'boolean' },
    tableOfContents: { type: 'string' },
  },
  computedFields,
}));

const transformToC = (toc: RehypeElement): RehypeElement => {
  return {
    type: 'element',
    tagName: 'div',
    properties: { className: 'toc' },
    children: [
      {
        type: 'element',
        tagName: 'p',
        properties: { className: 'title' },
        children: [
          {
            type: 'text',
            value: 'Table of Contents:',
          },
        ],
      },
      ...(toc.children || []),
    ],
  };
};

const contentLayerConfig = makeSource({
  contentDirPath: 'data',
  documentTypes: [Blog],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor'],
          },
        },
      ],
      [
        rehypeToc,
        {
          customizeTOC: (toc: RehypeElement) => {
            return transformToC(toc);
          },
        },
      ],
    ],
  },
});

export default contentLayerConfig;
