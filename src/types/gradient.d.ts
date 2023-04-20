const rainbowColors = [
  'brand',
  'blue',
  'green',
  'yellow',
  'orange',
  'red',
  'purple',
] as const;

export type RainbowColor = (typeof rainbowColors)[number];

type FromGradientClass = `from-gradient-${RainbowColor}`;
type ToGradientClass = `to-gradient-${RainbowColor}`;

export type GradientClass =
  | FromGradientClass
  | ToGradientClass
  | `${FromGradientClass} ${ToGradientClass}`;
