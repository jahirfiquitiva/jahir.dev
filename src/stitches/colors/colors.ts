/* eslint-disable max-len */
import { ThemeColorsNames } from './types';

type RGBValues = `${number} ${number} ${number}`;
type HexColor = `#${string}`;
type RGBColor = `rgb(${RGBValues})`;
type RGBAColor = `rgba(${RGBValues} / ${number})`;
type CSSColorOptions = RGBValues | HexColor | RGBColor | RGBAColor;
type StitchesVariable = `$${string}`;
type CSSVariable = `var(--${string})` | `var(--${string}, ${CSSColorOptions})`;

export type ThemeColorValue = CSSColorOptions | CSSVariable | StitchesVariable;

type ThemeColors = { [Key in ThemeColorsNames]?: ThemeColorValue };

export const colors: ThemeColors = {
  transparent: 'rgba(0 0 0 / 0)',
  primary: 'var(--arc-palette-minContrastColor, #f6f9fe)',
  background: 'var(--arc-palette-backgroundExtra, #fff)',
  divider: 'rgba(9 17 34 / .12)',

  toolbar: 'var(--arc-palette-background, rgba(235 240 251 / .75))',
  'toolbar-glow': '45 82 171',

  'text-primary': 'rgba(9 17 34 / .95)',
  'text-secondary': 'rgba(9 17 34 / .8)',
  'text-tertiary': 'rgba(9 17 34 / .6)',
  'img-drop-shadow': 'rgba(9 17 34 / .28)',

  'accent-animoji':
    'var(--arc-background-gradient-overlay-color1, var(--arc-background-gradient-color1, var(--arc-background-simple-color, #d7e1f7)))',
  'accent-light': 'var(--arc-palette-foregroundPrimary, #6085de)',
  accent: 'var(--arc-palette-focus, #3867d6)',
  'accent-dark': 'var(--arc-palette-maxContrastColor, #2d52ab)',
  'on-accent': '#fff',

  'gradient-brand': '$accent',
  'gradient-blue': '#247aae',
  'gradient-green': '#1a9956',
  'gradient-yellow': '#c69227',
  'gradient-orange': '#c86827',
  'gradient-red': '#bc2f48',
  'gradient-purple': '#7a4cbb',

  'shadow-brand': '#88a4e6',
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
  'code-deleted': '#d43551',

  'illustrations-shadow':
    'var(--arc-background-gradient-overlay-color1, var(--arc-background-gradient-color1, var(--arc-background-simple-color, #c0b4f0)))',
};

export const darkThemeColors: ThemeColors = {
  primary: 'var(--arc-palette-maxContrastColor, #0c121e)',
  background: 'var(--arc-palette-title, #0c121e)',
  divider: 'rgba(235 240 251 / .12)',

  toolbar: 'var(--arc-palette-maxContrastColor, rgba(18 27 44 / .65))',
  'toolbar-glow': '136 164 230',

  'text-primary': '#fff',
  'text-secondary': 'rgba(235 240 251 / .85)',
  'text-tertiary': 'rgba(235 240 251 / .6)',
  'img-drop-shadow': 'rgba(235 240 251 / .24)',

  'accent-animoji':
    'var(--arc-background-gradient-overlay-color1, var(--arc-background-gradient-color1, var(--arc-background-simple-color, #162956)))',
  'accent-light': 'var(--arc-palette-focus, #afc2ef)',
  accent: 'var(--arc-palette-foregroundPrimary, #88a4e6)',
  'accent-dark': 'var(--arc-palette-maxContrastColor, #6085de)',
  'on-accent': 'rgba(9 17 34 / .9)',

  'shadow-brand': '#d7e1f7',

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
  'code-deleted': '#fc6c74',

  'illustrations-shadow':
    'var(--arc-background-gradient-overlay-color1, var(--arc-background-gradient-color1, var(--arc-background-simple-color, #d8d1f6)))',
};
