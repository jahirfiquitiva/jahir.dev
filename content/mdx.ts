import { MDXOptions } from '@contentlayer/core';
import rehypeToc from '@jsdevtools/rehype-toc';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

import { RehypeElement } from './../src/types';

const customizeTOC = (toc: RehypeElement): RehypeElement => {
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
  ],
};

export default mdx;
