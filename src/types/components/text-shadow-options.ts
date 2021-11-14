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
