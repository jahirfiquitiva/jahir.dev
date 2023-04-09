const colorToTransparencyTailwindVar = (colorName) => ({
  [colorName]: `rgba(var(--color-${colorName}) / <alpha-value>)`,
});

const colorToTailwindVar = (colorName) => ({
  [colorName]: `var(--color-${colorName})`,
});

const reduceObjArray = (objs) => objs.reduce((r, c) => Object.assign(r, c), {});

// Must be defined like r g b in CSS
const transparencyColors = ['accent-dark'];

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
];

// Used in gradients and shadows
const rainbowColors = [
  'brand',
  'blue',
  'green',
  'yellow',
  'orange',
  'red',
  'purple',
];

const gradientColors = rainbowColors.map((it) => `gradient-${it}`);
const shadowColors = rainbowColors.map((it) => `shadow-${it}`);

export const colors = {
  ...reduceObjArray(transparencyColors.map(colorToTransparencyTailwindVar)),
  ...reduceObjArray(normalColors.map(colorToTailwindVar)),
  gradient: {
    ...reduceObjArray(gradientColors.map(colorToTailwindVar)),
  },
  shadow: {
    ...reduceObjArray(shadowColors.map(colorToTailwindVar)),
  },
};
