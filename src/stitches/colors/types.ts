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

type AccentVariants = 'light' | 'dark' | 'animoji';
type AccentColor = 'accent' | `accent-${AccentVariants}` | 'on-accent';

type TextColorVariants = 'primary' | 'secondary' | 'tertiary';
type TextColor = `text-${TextColorVariants}`;

type ToolbarColorVariants = 'glow'; // | 'highlight';
type ToolbarColor = 'toolbar' | `toolbar-${ToolbarColorVariants}`;

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
  | 'background'
  | 'divider'
  | 'selection'
  | 'img-drop-shadow'
  | 'illustrations-shadow'
  | AccentColor
  | GradientColor
  | ShadowColor
  | TextColor
  | ToolbarColor
  | Scrollbar
  | CodeColor;
