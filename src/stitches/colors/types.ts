export const rainbowColorsArray = [
  'brand',
  'blue',
  'green',
  'yellow',
  'orange',
  'red',
  'purple',
] as const;

export type RainbowColors = typeof rainbowColorsArray[number];
type GradientColor = `gradient-${RainbowColors}`;
type ShadowColor = `shadow-${RainbowColors}`;

type AccentColor = 'accent' | 'accent-dark' | 'accent-shadow' | 'on-accent';

type TextColorVariants = 'primary' | 'secondary' | 'tertiary';
type TextColor = `text-${TextColorVariants}`;

type Scrollbar = 'scrollbar-bg' | 'scrollbar-thumb';

type CodeColors =
  | 'comment'
  | 'punctuation'
  | 'selector'
  | 'property'
  | 'operator'
  | 'function'
  | 'deleted';
type CodeColor = `code-${CodeColors}`;

export type ThemeColorsNames =
  | 'transparent'
  | 'primary'
  | 'toolbar'
  | 'background'
  | 'divider'
  | 'selection'
  | 'illustrations-shadow'
  | AccentColor
  | GradientColor
  | ShadowColor
  | TextColor
  | Scrollbar
  | CodeColor;
