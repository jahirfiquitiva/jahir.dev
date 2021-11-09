import tw, { styled } from 'twin.macro';

import {
  Component,
  ComponentProps,
  ComponentWithGradientProps,
  ComponentWithTextShadowProps,
  gradientToTailwind,
  textShadowToClassName,
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
    ComponentWithTextShadowProps {
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
    children,
    className: baseClassName,
    style,
  } = props;

  const css = [fontSize ? fontSizeStyles[fontSize] : null];
  const shadowClass = textShadowToClassName(shadowColor);
  const className = [shadowClass, baseClassName].join(' ').trim();

  if (size === '6') {
    return (
      <h6 css={css} className={className} style={style}>
        {children}
      </h6>
    );
  }
  if (size === '5') {
    return (
      <h5 css={css} className={className} style={style}>
        {children}
      </h5>
    );
  }
  if (size === '4') {
    return (
      <h4 css={css} className={className} style={style}>
        {children}
      </h4>
    );
  }
  if (size === '3') {
    return (
      <h3 css={css} className={className} style={style}>
        {children}
      </h3>
    );
  }
  if (size === '2') {
    return (
      <h2 css={css} className={className} style={style}>
        {children}
      </h2>
    );
  }
  return (
    <h1 css={css} className={className} style={style}>
      {children}
    </h1>
  );
};
