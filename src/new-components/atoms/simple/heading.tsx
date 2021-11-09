import tw, { css } from 'twin.macro';

import { forcedGradientStyles, baseGradientStyles } from './gradient-span';

import {
  Component,
  ComponentProps,
  ComponentWithTextShadowProps,
  ComponentWithGradientProps,
  textShadowToClassName,
  gradientToTailwind,
} from '~/types';

const fontSizesKeys = [
  'tiny',
  'base',
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  '2xl',
  '3xl',
] as const;
const headingSizes = ['1', '2', '3', '4', '5', '6'] as const;

type HeadingSize = typeof headingSizes[number];
type FontSize = typeof fontSizesKeys[number] | null | undefined;

export interface HeadingProps
  extends ComponentProps,
    ComponentWithTextShadowProps,
    ComponentWithGradientProps {
  size?: HeadingSize;
  fontSize?: FontSize;
}

const fontSizeStyles = {
  tiny: tw`text-tiny`,
  base: tw`text-base`,
  xs: tw`text-xs`,
  sm: tw`text-sm`,
  md: tw`text-md`,
  lg: tw`text-lg`,
  xl: tw`text-xl`,
  '2xl': tw`text-2xl`,
  '3xl': tw`text-3xl`,
};

export const Heading: Component<HeadingProps> = (props) => {
  const {
    size = '1',
    fontSize,
    shadowColor,
    gradientColor,
    forceGradient,
    children,
    className,
    style,
  } = props;

  const gradientTailwind = gradientToTailwind(gradientColor);
  const gradientStyles = gradientColor
    ? [baseGradientStyles, gradientTailwind]
    : [];
  const headingCss = [
    css`
      & span.emoji:first-child {
        color: var(--background);
      }
    `,
    forceGradient && gradientColor ? forcedGradientStyles : null,
    fontSize ? fontSizeStyles[fontSize] : null,
    shadowColor ? tw`text-shadow dark:(text-shadow-none)` : null,
    shadowColor
      ? css`
          --text-shadow-color: var(--text-shadow-${shadowColor});
        `
      : null,
    ...gradientStyles,
  ];

  const HeadingTag = `h${size}` as keyof JSX.IntrinsicElements;
  return (
    <HeadingTag css={headingCss} className={className} style={style}>
      {children}
    </HeadingTag>
  );
};
