// Must be defined like r g b in CSS
const transparencyColors = ['inverse', 'accent-dark'] as const;
type TransparencyColor = (typeof transparencyColors)[number];

const normalColors = [
  'transparent',
  'background',
  'toolbar',
  'divider',
  'primary-txt',
  'secondary-txt',
  'tertiary-txt',
  'accent',
  'on-accent',
  'scrollbar-bg',
  'scrollbar-thumb',
  'selection',
  'illustrations-shadow',
  'img-drop-shadow',
] as const;
type NormalColor = (typeof normalColors)[number];

// Used in gradients and shadows
const rainbowColors = [
  'brand',
  'blue',
  'green',
  'yellow',
  'orange',
  'red',
  'purple',
] as const;
type RainbowColor = (typeof rainbowColors)[number];
type GradientColor = `gradient-${RainbowColor}`;
type ShadowColor = `shadow-${RainbowColor}`;

const gradientColors: Array<GradientColor> = rainbowColors.map(
  (it) => `gradient-${it}` as GradientColor,
);

const shadowColors: Array<ShadowColor> = rainbowColors.map(
  (it) => `shadow-${it}` as ShadowColor,
);

const colorToTransparencyTailwindVar = (colorName: TransparencyColor) => ({
  [colorName]: `rgba(var(--color-${colorName}) / <alpha-value>)`,
});

const colorToTailwindVar = (
  colorName: NormalColor | GradientColor | ShadowColor,
) => ({
  [colorName]: `var(--color-${colorName})`,
});

const reduceObjArray = <T>(objs: Array<T>) =>
  objs.reduce((r, c) => Object.assign(r, c), {});

export const colors = {
  ...reduceObjArray(transparencyColors.map(colorToTransparencyTailwindVar)),
  ...reduceObjArray(normalColors.map(colorToTailwindVar)),
  ...reduceObjArray(gradientColors.map(colorToTailwindVar)),
  ...reduceObjArray(shadowColors.map(colorToTailwindVar)),
};
