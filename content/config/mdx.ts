/* eslint-disable import/no-extraneous-dependencies */
import { MDXOptions } from '@contentlayer/core';
import rehypeToc from '@jsdevtools/rehype-toc';
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

import imageMetadata from './image-metadata';

interface RehypeElement {
  type: string;
  tagName?: string;
  value?: string;
  properties?: {
    className?: string;
  };
  children?: Array<RehypeElement>;
}

const customizeTOC = (toc: RehypeElement): RehypeElement | null => {
  try {
    const { children } = toc;
    const childrenOfChildren = children?.[0]?.children;
    if (!children?.length || !childrenOfChildren?.length) return null;
  } catch (e) {}
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
            value: 'Table of Contents',
          },
        ],
      },
      ...(toc.children || []),
    ],
  };
};

const mdx: MDXOptions = {
  remarkPlugins: [remarkGfm],
  rehypePlugins: [
    imageMetadata,
    rehypeSlug,
    rehypeCodeTitles,
    rehypePrism,
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
        customizeTOC,
      },
    ],
    rehypeAccessibleEmojis,
  ],
};

export default mdx;
