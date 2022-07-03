type RainbowColors = 'brand' | 'blue' | 'green' | 'yellow' | 'orange' | 'red' | 'purple';
type GradientColor = `gradient-${RainbowColors}`;
type ShadowColor = `shadow-${RainbowColors}`;

type AccentVariants = 'light' | 'lighter' | 'dark' | 'darker' | 'animoji';
type AccentColor = 'accent' | `accent-${AccentVariants}`;

type ThemeColorsNames = 'primary' | 'background' | AccentColor | GradientColor | ShadowColor;

type HexColor = `#${string}`;
type RGBColor = `rgb(${number} ${number} ${number})`;
type RGBAColor = `rgba(${number} ${number} ${number} / ${number})`;
type StitchesVariable = `$${string}`;

type ThemeColorValue = HexColor | RGBColor | RGBAColor | StitchesVariable;

type ThemeColors = { [Key in ThemeColorsNames]?: ThemeColorValue };

export const colors: ThemeColors = {
  primary: '#f6f9fe',
  background: '#fff',

  'accent-animoji': '#d7e1f7',
  'accent-lighter': '#88a4e6',
  'accent-light': '#6085de',
  accent: '#3867d6',
  'accent-dark': '#2d52ab',
  'accent-darker': '#223e80',

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
};

export const darkThemeColors: ThemeColors = {
  primary: '#0c121e',
  background: '#0c121e',

  'accent-animoji': '#162956',
  'accent-lighter': '#d7e1f7',
  'accent-light': '#afc2ef',
  accent: '#88a4e6',
  'accent-dark': '#6085de',
  'accent-darker': '#3867d6',

  'gradient-blue': '$shadow-blue',
  'gradient-green': '$shadow-green',
  'gradient-yellow': '$shadow-yellow',
  'gradient-orange': '$shadow-orange',
  'gradient-red': '$shadow-red',
  'gradient-purple': '$shadow-purple',
};
