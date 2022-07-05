/* eslint-disable max-len */
// Source: https://github.com/jakejarvis/jarv.is/blob/main/lib/styles/fonts/Inter.ts
// Legacy
import interLatin400NormalWoff from '@fontsource/inter/files/inter-latin-400-normal.woff';
import interLatin400NormalWoff2 from '@fontsource/inter/files/inter-latin-400-normal.woff2';
import interLatin500NormalWoff from '@fontsource/inter/files/inter-latin-500-normal.woff';
import interLatin500NormalWoff2 from '@fontsource/inter/files/inter-latin-500-normal.woff2';
// Variable
import interLatinVarFullNormalWoff2 from '@fontsource/inter/files/inter-latin-variable-full-normal.woff2';
import type { AtRule } from '@stitches/react/types/css';

export const name = {
  regular: 'Inter',
  variable: 'Inter var',
};
// re-export hashed URL(s) of the most prominent file so we can preload it in head:
export const preloadFonts = [
  {
    key: 'inter-var',
    src: interLatinVarFullNormalWoff2,
    type: 'font/woff2',
  },
];
export const family: AtRule.FontFace[] = [
  {
    fontFamily: name.regular,
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `url(${interLatin400NormalWoff2}) format("woff2"), url(${interLatin400NormalWoff}) format("woff")`,
  },
  {
    fontFamily: name.regular,
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 500,
    src: `url(${interLatin500NormalWoff2}) format("woff2"), url(${interLatin500NormalWoff}) format("woff")`,
  },
  {
    fontFamily: name.variable,
    fontStyle: 'oblique 0deg 10deg',
    fontDisplay: 'swap',
    fontWeight: '100 900',
    src: `url(${interLatinVarFullNormalWoff2}) format("woff2")`,
  },
];
