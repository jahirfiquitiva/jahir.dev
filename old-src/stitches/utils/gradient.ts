import type { CSS } from '@stitches/react';

export const gradientOptionsArray = [
  'brand-to-blue',
  'blue-to-green',
  'green-to-yellow',
  'yellow-to-orange',
  'orange-to-red',
  'red-to-purple',
  'purple-to-brand',
] as const;

export type GradientOption = typeof gradientOptionsArray[number];

type GradientVariantsCss = { [Key in GradientOption]?: CSS };

export const gradientVariants = (): GradientVariantsCss => {
  const gradientVariants: GradientVariantsCss = {};
  gradientOptionsArray.forEach((key) => {
    gradientVariants[key] = {
      gradient: key,
    };
  });
  return gradientVariants;
};

const gradientUtils = {
  gradient: (option: GradientOption) => {
    const split = option.split('-');
    const [start, , end] = split;
    return {
      $$gradientStart: `$colors$gradient-${start}`,
      $$gradientEnd: `$colors$gradient-${end}`,
    };
  },
};

export default gradientUtils;
