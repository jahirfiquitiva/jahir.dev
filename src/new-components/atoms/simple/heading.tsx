import tw, { styled } from 'twin.macro';

import {
  Component,
  ComponentProps,
  ComponentWithGradientProps,
  ComponentWithTextShadowProps,
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
    ComponentWithGradientProps,
    ComponentWithTextShadowProps {
  size?: HeadingSize;
  fontSize?: FontSize;
}

const baseHeadingStyles = tw`inline-block`;

export const Heading: Component<HeadingProps> = (props) => {
  const {
    size = '1',
    shadowColor,
    gradientColor,
    forceGradient,
    children,
    className,
    style,
  } = props;

  const gradientTailwind = gradientToTailwind(gradientColor);

  const css = [baseHeadingStyles, gradientTailwind];

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
