import { createStitches } from '@stitches/react';
import type { CSS } from '@stitches/react';

import {
  fonts,
  fontSizes,
  utils,
  colors,
  darkThemeColors,
  breakpoints,
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
      'max-site-width': '768px',
    },
    fontSizes,
    fonts: {
      system: systemFont,
      inter: `${fonts.Inter.name.regular}, ${systemFont}`,
      interVar: `${fonts.Inter.name.variable}, ${systemFont}`,
      manrope: `${fonts.Manrope.name.regular}, ${fonts.Inter.name.regular}, ${systemFont}`,
      manropeVar: `${fonts.Manrope.name.variable}, ${fonts.Inter.name.variable}, ${systemFont}`,
    },
  },
  utils,
  media: { ...breakpoints, hover: '(any-hover: hover)' },
});

export const darkTheme = createTheme('dark', {
  colors: darkThemeColors,
});

export const globalStyles = globalCss({
  '@font-face': [...fonts.Inter.family, ...fonts.Manrope.family],
  'html, body': {
    useFont: 'inter',
  },
  'h1, h2, h3, h4, h5, h6, button': {
    useFont: 'manrope',
  },
  '#__next': {
    $$totalToolbarHeight: '64px',
    $$verticalContentPadding: '1.4rem',
    '@tablet-sm': {
      $$totalToolbarHeight: '68px',
      $$verticalContentPadding: '1.8rem',
    },
    '@tablet-lg': {
      $$verticalContentPadding: '2.4rem',
    },
  },
});

export const preloadFonts = [
  ...fonts.Inter.preloadFonts,
  ...fonts.Manrope.preloadFonts,
];

export type StitchesCSS = CSS<typeof config>;
