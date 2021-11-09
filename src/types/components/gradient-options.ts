const gradientOptionsArray = [
  'brand-to-blue',
  'blue-to-green',
  'green-to-yellow',
  'yellow-to-orange',
  'orange-to-red',
  'red-to-purple',
  'purple-to-brand',
] as const;

export type GradientOptions = typeof gradientOptionsArray[number];

export interface ComponentWithGradientProps {
  gradientColor?: GradientOptions;
  forceGradient?: boolean;
}

export const gradientToClassName = (
  gradient?: GradientOptions,
  forceGradient?: boolean,
  isDivider?: boolean,
): string => {
  // TODO: Validate if gradient is of expected type
  if (!gradient) return '';
  return [
    isDivider ? '' : 'text-gradient',
    gradient,
    forceGradient ? 'forced' : '',
  ]
    .join(' ')
    .trim();
};
