/* eslint-disable import/no-extraneous-dependencies */
import { readFileSync } from 'fs';

import { MDXOptions } from '@contentlayer/core';
import rehypeToc from '@jsdevtools/rehype-toc';
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import remarkUnwrapImages from 'remark-unwrap-images';

import imageMetadata from './image-metadata';

const commentsCustomColor = (theme: 'light' | 'dark') => ({
  name: 'Comment',
  scope: ['comment', 'string.comment'],
  settings: {
    foreground: theme === 'light' ? '#75808F' : '#7E8896',
  },
});

const getThemeJson = (theme: 'light' | 'dark'): JSON | string => {
  const defaultTheme = theme === 'light' ? 'min-light' : 'dracula';
  try {
    const json = readFileSync(`./cl-config/themes/${theme}.json`, 'utf-8');
    const parsed = JSON.parse(json);
    return {
      ...parsed,
      colors: {
        ...parsed.colors,
        'editor.foreground': theme === 'light' ? '#334155' : '#CBD5E1',
      },
      tokenColors: [...parsed.tokenColors, commentsCustomColor(theme)],
    };
  } catch (e) {
    return defaultTheme;
  }
};

interface RehypeElement {
  type: string;
  tagName?: string;
  value?: string;
  properties: {
    className: Array<string>;
    style?: string;
  } & Record<string, unknown>;
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
    tagName: 'details',
    properties: { className: ['toc'], open: true },
    children: [
      {
        type: 'element',
        tagName: 'summary',
        properties: { className: ['title'] },
        children: [
          {
            type: 'text',
            value: 'Table of Contents',
            properties: { className: [] },
          },
        ],
      },
      ...(toc.children || []),
    ],
  };
};

const mdx: MDXOptions = {
  remarkPlugins: [remarkGfm, remarkUnwrapImages],
  rehypePlugins: [
    imageMetadata,
    rehypeSlug,
    [
      rehypePrettyCode,
      {
        theme: {
          light: getThemeJson('light'),
          dark: getThemeJson('dark'),
        },
        onVisitLine(node?: RehypeElement | null) {
          if (!node) return;
          // Prevent lines from collapsing in `display: grid` mode, and allow empty
          // lines to be copy/pasted
          if (node.children?.length === 0) {
            node.children = [
              { type: 'text', value: ' ', properties: { className: [] } },
            ];
          }
        },
        onVisitHighlightedLine(node?: RehypeElement | null) {
          if (!node) return;
          node.properties?.className.push('line--highlighted');
        },
        onVisitHighlightedWord(node?: RehypeElement | null) {
          if (!node) return;
          node.properties.className = ['word--highlighted'];
        },
      },
    ],
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
