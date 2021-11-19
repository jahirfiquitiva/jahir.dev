import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useMemo } from 'react';

import { forcedGradientStyles } from './gradient-span';

import {
  Component,
  ComponentProps,
  ComponentWithTextShadowProps,
  ComponentWithGradientProps,
  TextShadowOptions,
  GradientOptions,
  gradientToCss,
} from '~/types';
import { useTheme } from '~/providers/theme';

const headingSizes = ['1', '2', '3', '4', '5', '6'] as const;
const fontSizesKeys = [
  'tiny',
  'almost-tiny',
  '3xs',
  '2xs',
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  '2xl',
  '3xl',
  ...headingSizes,
] as const;

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
  tiny: '3xs',
  'almost-tiny': '2xs',
  '3xs': '3xs',
  '2xs': '2xs',
  xs: 'xs',
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
  '2xl': '2xl',
  '3xl': '3xl',
  1: '3xl', // h1
  2: '2xl', // h2
  3: 'xl', // h3
  4: 'md', // h4
  5: 'sm', // h5
  6: 'xs', // h6
};

const buildGradientAndShadowStyles = (
  fontSize?: FontSize,
  shadowColor?: TextShadowOptions,
  gradientColor?: GradientOptions,
  forceGradient?: boolean,
  isDark?: boolean,
) => {
  const shadowStyles = shadowColor
    ? [
        css`
          text-shadow: var(--text-shadow-size) var(--text-shadow-size) 0
            var(--text-shadow-color);
        `,
        isDark
          ? css`
              text-shadow: none;
            `
          : null,
        css`
          --text-shadow-color: var(--text-shadow-${shadowColor});
        `,
      ]
    : [];

  const gradientCss = gradientToCss(gradientColor);
  const gradientStyles = gradientColor
    ? [
        forceGradient ? forcedGradientStyles : null,
        css`
          display: inline-block;
        `,
        gradientCss,
      ]
    : [];

  const headingCss = [
    css`
      & span.emoji:first-of-type {
        color: rgb(var(--shadow-color));
        margin-right: 0.8rem;
      }
    `,
    fontSize
      ? css`
          font-size: var(--font-${fontSizeStyles[fontSize]});
        `
      : null,
    ...shadowStyles,
    ...gradientStyles,
  ];

  return headingCss;
};

export const Heading: Component<HeadingProps> = (props) => {
  const { isDark, themeReady } = useTheme();
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
      isDark && themeReady,
    );
  }, [fontSize, shadowColor, gradientColor, forceGradient, isDark, themeReady]);

  const HeadingTag = `h${size}` as keyof JSX.IntrinsicElements;
  return (
    <HeadingTag css={headingCss} className={className} style={style}>
      {children}
    </HeadingTag>
  );
};
