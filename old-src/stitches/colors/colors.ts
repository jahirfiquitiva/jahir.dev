import { CSSProperties } from '@stitches/react';

import { ThemeColorsNames } from './types';

type StitchesVariable = `$${string}`;

export type ThemeColorValue =
  | CSSProperties['color']
  | CSSProperties['backgroundColor']
  | StitchesVariable;

type ThemeColors = { [Key in ThemeColorsNames]?: ThemeColorValue };

export const colors: ThemeColors = {
  transparent: 'rgba(0 0 0 / 0)',
  primary: '#f6f9fe',
  background: '#fff',
  divider: 'rgba(9 17 34 / .12)',

  toolbar: 'rgba(235 240 251 / .75)',

  'text-primary': 'rgba(9 17 34 / .95)',
  'text-secondary': 'rgba(9 17 34 / .8)',
  'text-tertiary': 'rgba(9 17 34 / .6)',

  accent: '#3867d6',
  'accent-shadow': '45 82 171',
  'accent-dark': 'rgba($accent-shadow / 1)',
  'on-accent': '#fff',

  'gradient-brand': '$accent',
  'gradient-blue': '#247aae',
  'gradient-green': '#1a9956',
  'gradient-yellow': '#c69227',
  'gradient-orange': '#c86827',
  'gradient-red': '#bc2f48',
  'gradient-purple': '#7a4cbb',

  'shadow-brand': '#9CB3EB',
  'shadow-blue': '#81c1e9',
  'shadow-green': '#79d9a6',
  'shadow-yellow': '#fad483',
  'shadow-orange': '#fcb483',
  'shadow-red': '#f3899c',
  'shadow-purple': '#b898e3',

  'scrollbar-bg': 'rgba($accent-shadow / .5)',
  'scrollbar-thumb': '$primary',

  selection: 'rgba(56 103 214 / .25)',

  'illustrations-shadow': '#c0b4f0',
  'img-drop-shadow': 'rgba(9 17 34 / .28)',
};

export const darkThemeColors: ThemeColors = {
  primary: '#0c121e',
  background: '#0c121e',
  divider: 'rgba(235 240 251 / .12)',

  toolbar: 'rgba(18 27 44 / .65)',

  'text-primary': '#fff',
  'text-secondary': 'rgba(235 240 251 / .85)',
  'text-tertiary': 'rgba(235 240 251 / .6)',

  accent: '#88a4e6',
  'accent-shadow': '175 194 239',
  'on-accent': 'rgba(9 17 34 / .9)',

  'gradient-blue': '$shadow-blue',
  'gradient-green': '$shadow-green',
  'gradient-yellow': '$shadow-yellow',
  'gradient-orange': '$shadow-orange',
  'gradient-red': '$shadow-red',
  'gradient-purple': '$shadow-purple',

  'scrollbar-bg': '$accent',
  'scrollbar-thumb': '$primary',

  selection: 'rgba(136 164 230 / .25)',

  'illustrations-shadow': '#d8d1f6',
  'img-drop-shadow': 'rgba(235 240 251 / .24)',
};
