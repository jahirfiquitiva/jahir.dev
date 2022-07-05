/* eslint-disable max-len */
// Source: https://github.com/jakejarvis/jarv.is/blob/main/lib/styles/fonts/Inter.ts
// Legacy
import manropeLatin500NormalWoff from '@fontsource/manrope/files/manrope-latin-500-normal.woff';
import manropeLatin500NormalWoff2 from '@fontsource/manrope/files/manrope-latin-500-normal.woff2';
import manropeLatin600NormalWoff from '@fontsource/manrope/files/manrope-latin-600-normal.woff';
import manropeLatin600NormalWoff2 from '@fontsource/manrope/files/manrope-latin-600-normal.woff2';
import manropeLatin700NormalWoff from '@fontsource/manrope/files/manrope-latin-700-normal.woff';
import manropeLatin700NormalWoff2 from '@fontsource/manrope/files/manrope-latin-700-normal.woff2';
// Variable
import manropeLatinVarFullNormalWoff2 from '@fontsource/manrope/files/manrope-latin-variable-wghtOnly-normal.woff2';
import type { AtRule } from '@stitches/react/types/css';

export const name = {
  regular: 'Manrope',
  variable: 'Manrope var',
};
// re-export hashed URL(s) of the most prominent file so we can preload it in head:
export const preloadFonts = [
  {
    key: 'manrope-var',
    src: manropeLatinVarFullNormalWoff2,
    type: 'font/woff2',
  },
];
export const family: AtRule.FontFace[] = [
  {
    fontFamily: name.regular,
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 500,
    src: `url(${manropeLatin500NormalWoff2}) format("woff2"), url(${manropeLatin500NormalWoff}) format("woff")`,
  },
  {
    fontFamily: name.regular,
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 600,
    src: `url(${manropeLatin600NormalWoff2}) format("woff2"), url(${manropeLatin600NormalWoff}) format("woff")`,
  },
  {
    fontFamily: name.regular,
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 700,
    src: `url(${manropeLatin700NormalWoff2}) format("woff2"), url(${manropeLatin700NormalWoff}) format("woff")`,
  },
  {
    fontFamily: name.variable,
    fontStyle: 'oblique 0deg 10deg',
    fontDisplay: 'swap',
    fontWeight: '100 900',
    src: `url(${manropeLatinVarFullNormalWoff2}) format("woff2")`,
  },
];
