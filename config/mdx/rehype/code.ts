import { readFileSync } from 'fs';

import rehypePrettyCode from 'rehype-pretty-code';

const commentsCustomColor = (theme: 'light' | 'dark') => ({
  name: 'Comment',
  scope: ['comment', 'string.comment'],
  settings: {
    foreground: theme === 'light' ? '#75808F' : '#7E8896',
  },
});

const getThemeJson = (theme: 'light' | 'dark'): JSON | string => {
  try {
    const json = readFileSync(
      `${process.cwd()}/config/mdx/themes/${theme}.json`,
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
    console.error(e);
    return theme === 'light' ? 'min-light' : 'dracula';
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
    tokensMap: {
      var: 'variable.other',
      fn: 'entity.name.function', // green
      cls: 'entity.name.class', // blue
      str: 'string', // amber
      num: 'constant.numeric', // purple
      key: 'keyword', // red
      prm: 'variable.parameter', // orange
    },
  },
];
