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
): string => {
  // TODO: Validate if gradient is of expected type
  if (!gradient) return '';
  return `text-gradient ${gradient} ${forceGradient ? 'forced' : ''}`.trim();
};

export type TextShadowOptions =
  | 'brand'
  | 'blue'
  | 'green'
  | 'yellow'
  | 'orange'
  | 'red'
  | 'purple';

export interface ComponentWithTextShadowProps {
  shadowColor?: TextShadowOptions;
}

export const textShadowToClassName = (
  shadow?: TextShadowOptions | null,
  asGradient?: boolean,
): string => {
  // TODO: Validate if shadow is of expected type
  if (!shadow) return '';
  return `text-shadow ${shadow} ${asGradient ? 'as-gradient' : ''}`.trim();
};
