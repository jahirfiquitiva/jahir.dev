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
  return ['text-shadow', shadow, asGradient ? 'as-gradient' : '']
    .join(' ')
    .trim();
};
