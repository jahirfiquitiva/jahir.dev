import { useMemo } from 'react';
import tw, { css } from 'twin.macro';

import { forcedGradientStyles, baseGradientStyles } from './gradient-span';

import {
  Component,
  ComponentProps,
  ComponentWithTextShadowProps,
  ComponentWithGradientProps,
  TextShadowOptions,
  GradientOptions,
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

const buildGradientAndShadowStyles = (
  fontSize?: FontSize,
  shadowColor?: TextShadowOptions,
  gradientColor?: GradientOptions,
  forceGradient?: boolean,
) => {
  const shadowStyles = shadowColor
    ? [
        tw`text-shadow dark:(text-shadow-none)`,
        css`
          --text-shadow-color: var(--text-shadow-${shadowColor});
        `,
      ]
    : [];

  const gradientTailwind = gradientToTailwind(gradientColor);
  const gradientStyles = gradientColor
    ? [
        forceGradient ? forcedGradientStyles : null,
        baseGradientStyles,
        gradientTailwind,
      ]
    : [];

  const headingCss = [
    css`
      & span.emoji:first-child {
        color: rgb(var(--shadow-color));
        ${tw`mr-8`}
      }
    `,
    fontSize ? fontSizeStyles[fontSize] : null,
    ...shadowStyles,
    ...gradientStyles,
  ];

  return headingCss;
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

  const headingCss = useMemo(() => {
    return buildGradientAndShadowStyles(
      fontSize,
      shadowColor,
      gradientColor,
      forceGradient,
    );
  }, [fontSize, shadowColor, gradientColor, forceGradient]);

  const HeadingTag = `h${size}` as keyof JSX.IntrinsicElements;
  return (
    <HeadingTag css={headingCss} className={className} style={style}>
      {children}
    </HeadingTag>
  );
};
