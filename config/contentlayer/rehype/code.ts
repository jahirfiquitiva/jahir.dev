import { readFileSync } from 'fs';

import rehypePrettyCode from 'rehype-pretty-code';

import type { RehypeElement } from './types';

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
    const json = readFileSync(
      `./config/contentlayer/themes/${theme}.json`,
      'utf-8',
    );
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

export const prettyCode = [
  rehypePrettyCode,
  {
    theme: {
      light: getThemeJson('light'),
      dark: getThemeJson('dark'),
    },
    keepBackground: false,
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
      node.properties?.className?.push('line--highlighted');
    },
    onVisitHighlightedWord(node?: RehypeElement | null) {
      if (!node) return;
      node.properties.className = ['word--highlighted'];
    },
  },
];
