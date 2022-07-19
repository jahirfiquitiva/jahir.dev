import { ThemeColorsNames } from './types';

type RGBValues = `${number} ${number} ${number}`;
type HexColor = `#${string}`;
type RGBColor = `rgb(${RGBValues})`;
type RGBAColor = `rgba(${RGBValues} / ${number})`;
type StitchesVariable = `$${string}`;

export type ThemeColorValue =
  | RGBValues
  | HexColor
  | RGBColor
  | RGBAColor
  | StitchesVariable;

type ThemeColors = { [Key in ThemeColorsNames]?: ThemeColorValue };

export const colors: ThemeColors = {
  transparent: 'rgba(0 0 0 / 0)',
  primary: '#f6f9fe',
  background: '#fff',
  divider: 'rgba(9 17 34 / .12)',

  toolbar: 'rgba(235 240 251 / .75)',
  'toolbar-glow': '45 82 171',

  'text-primary': 'rgba(9 17 34 / .95)',
  'text-secondary': 'rgba(9 17 34 / .8)',
  'text-tertiary': 'rgba(9 17 34 / .6)',
  'img-drop-shadow': 'rgba(9 17 34 / .28)',

  'accent-animoji': '#d7e1f7',
  'accent-lighter': '#88a4e6',
  'accent-light': '#6085de',
  accent: '#3867d6',
  'accent-dark': '#2d52ab',
  'accent-darker': '#223e80',
  'on-accent': '#fff',

  'gradient-brand': '$accent',
  'gradient-blue': '#247aae',
  'gradient-green': '#1a9956',
  'gradient-yellow': '#c69227',
  'gradient-orange': '#c86827',
  'gradient-red': '#bc2f48',
  'gradient-purple': '#7a4cbb',

  'shadow-brand': '$accent-lighter',
  'shadow-blue': '#81c1e9',
  'shadow-green': '#79d9a6',
  'shadow-yellow': '#fad483',
  'shadow-orange': '#fcb483',
  'shadow-red': '#f3899c',
  'shadow-purple': '#b898e3',

  'scrollbar-bg': '$accent-light',
  'scrollbar-thumb': '#f2f5fc',

  selection: 'rgba(56 103 214 / .25)',

  'code-comment': '$text-tertiary',
  'code-punctuation': '$text-secondary',
  'code-selector': '#178a4d',
  'code-property': '#7a4cbb',
  'code-operator': '#c86827',
  'code-function': '#aa499d',

  'illustrations-shadow': '#c0b4f0',
};

export const darkThemeColors: ThemeColors = {
  primary: '#0c121e',
  background: '#0c121e',
  divider: 'rgba(235 240 251 / .12)',

  toolbar: 'rgba(18 27 44 / .65)',
  'toolbar-glow': '136 164 230',

  'text-primary': '#fff',
  'text-secondary': 'rgba(235 240 251 / .85)',
  'text-tertiary': 'rgba(235 240 251 / .6)',
  'img-drop-shadow': 'rgba(235 240 251 / .24)',

  'accent-animoji': '#162956',
  'accent-lighter': '#d7e1f7',
  'accent-light': '#afc2ef',
  accent: '#88a4e6',
  'accent-dark': '#6085de',
  'accent-darker': '#3867d6',
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

  'code-selector': '#26de81',
  'code-property': '#b77eee',
  'code-operator': '#fed330',
  'code-function': '#f368e0',

  'illustrations-shadow': '#d8d1f6',
};
