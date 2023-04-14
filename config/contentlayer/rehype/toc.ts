import rehypeToc from '@jsdevtools/rehype-toc';
import type { Pluggable } from 'unified';

import type { RehypeElement } from './types';

const customizeToc = (toc: RehypeElement): RehypeElement | null => {
  try {
    const { children } = toc;
    const childrenOfChildren = children?.[0]?.children;
    if (!children?.length || !childrenOfChildren?.length) return null;
  } catch (e) {}
  return {
    type: 'element',
    tagName: 'details',
    properties: { className: ['toc'], open: true, 'data-type': 'toc' },
    children: [
      {
        type: 'element',
        tagName: 'summary',
        properties: { className: ['title'], 'data-type': 'toc-title' },
        children: [
          {
            type: 'element',
            tagName: 'span',
            properties: { className: [] },
            children: [
              {
                type: 'text',
                value: 'Table of Contents',
                properties: { className: [] },
              },
            ],
          },
        ],
      },
      {
        type: 'element',
        tagName: 'nav',
        properties: {},
        children: toc.children || [],
      },
    ],
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const toc: Pluggable<Array<any>> = [
  rehypeToc,
  { customizeTOC: customizeToc },
];
