import tw from 'twin.macro';

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

export const gradientToTailwind = (gradient?: GradientOptions) => {
  if (!gradient) return tw``;
  switch (gradient) {
    case 'brand-to-blue': {
      return tw`from-gradients-brand to-gradients-blue`;
    }
    case 'blue-to-green': {
      return tw`from-gradients-blue to-gradients-green`;
    }
    case 'green-to-yellow': {
      return tw`from-gradients-green to-gradients-yellow`;
    }
    case 'yellow-to-orange': {
      return tw`from-gradients-yellow to-gradients-orange`;
    }
    case 'orange-to-red': {
      return tw`from-gradients-orange to-gradients-red`;
    }
    case 'red-to-purple': {
      return tw`from-gradients-red to-gradients-purple`;
    }
    case 'purple-to-brand': {
      return tw`from-gradients-purple to-gradients-brand`;
    }
    default: {
      return tw`from-divider to-divider`;
    }
  }
};
