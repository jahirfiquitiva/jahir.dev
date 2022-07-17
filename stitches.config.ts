import { createStitches } from '@stitches/react';
import type { CSS } from '@stitches/react';

import {
  fonts,
  fontSizes,
  utils,
  colors,
  darkThemeColors,
  breakpoints,
  spaces,
} from '@/stitches';

const systemFont =
  // eslint-disable-next-line max-len
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  styled,
  theme,
  keyframes,
} = createStitches({
  theme: {
    colors,
    sizes: {
      'max-site-width': '666px',
    },
    fontSizes,
    fonts: {
      system: systemFont,
      inter: `${fonts.Inter.name.regular}, ${systemFont}`,
      interVar: `${fonts.Inter.name.variable}, ${systemFont}`,
      manrope: `${fonts.Manrope.name.regular}, ${fonts.Inter.name.regular}, ${systemFont}`,
      manropeVar: `${fonts.Manrope.name.variable}, ${fonts.Inter.name.variable}, ${systemFont}`,
    },
    space: spaces as { [x: string]: string },
  },
  utils,
  media: {
    ...breakpoints,
    hover: '(any-hover: hover)',
    animations: '(prefers-reduced-motion: no-preference)',
  },
});

export const darkTheme = createTheme('dark', {
  colors: darkThemeColors,
});

export const globalStyles = globalCss({
  '@font-face': [...fonts.Inter.family, ...fonts.Manrope.family],
  'html, body': {
    useFont: 'inter',
    accentColor: '$colors$accent',
  },
  'h1, h2, h3, h4, h5, h6, button': {
    useFont: 'manrope',
  },
  '#__next': {
    $$totalToolbarHeight: '64px',
    $$scrollMargin: 'calc($$totalToolbarHeight + .5rem)',
    $$verticalContentPadding: '1.5rem',
    '@tablet-sm': {
      $$totalToolbarHeight: '68px',
      $$scrollMargin: 'calc($$totalToolbarHeight + 1rem)',
      $$verticalContentPadding: '1.875rem',
    },
    '@tablet-lg': {
      $$verticalContentPadding: '2.5rem',
    },
    '& section': {
      scrollMarginTop: '$$scrollMargin',
    },
  },
});

export const preloadFonts = [
  ...fonts.Inter.preloadFonts,
  ...fonts.Manrope.preloadFonts,
];

export type StitchesCSS = CSS<typeof config>;
