import styled from '@emotion/styled';

import {
  Component,
  ComponentProps,
  ComponentWithGradientProps,
  ComponentWithTextShadowProps,
  gradientToClassName,
  textShadowToClassName,
} from '~/types';

const fontSizesKeys = ['xxxl', 'xxl', 'xl', 'md', 'sm', 'xs', 'xxs'] as const;
const headingSizes = ['1', '2', '3', '4', '5', '6'] as const;

type HeadingSize = typeof headingSizes[number];

type FontSize = typeof fontSizesKeys[number] | HeadingSize | null | undefined;

export interface HeadingProps
  extends ComponentProps,
    ComponentWithGradientProps,
    ComponentWithTextShadowProps {
  size?: HeadingSize;
  fontSize?: FontSize;
}

const BaseHeading: Component<HeadingProps> = (props) => {
  const {
    size = '1',
    shadowColor,
    gradientColor,
    forceGradient,
    children,
    className,
  } = props;
  const shadowClass = textShadowToClassName(shadowColor);
  const gradientClass = gradientToClassName(gradientColor, forceGradient);
  const fullClassName = [shadowClass, gradientClass, className]
    .join(' ')
    .trim();

  if (size === '6') return <h6 className={fullClassName}>{children}</h6>;
  if (size === '5') return <h5 className={fullClassName}>{children}</h5>;
  if (size === '4') return <h4 className={fullClassName}>{children}</h4>;
  if (size === '3') return <h3 className={fullClassName}>{children}</h3>;
  if (size === '2') return <h2 className={fullClassName}>{children}</h2>;
  return <h1 className={fullClassName}>{children}</h1>;
};

const buildFontSizeStyle = (fontSize?: FontSize): string => {
  if (!fontSize) return '';
  let actualFontSize = '';
  if (headingSizes.includes(fontSize as HeadingSize)) {
    actualFontSize = fontSizesKeys[parseInt(fontSize)] || '';
  } else {
    actualFontSize = fontSize;
  }
  if (!actualFontSize) return '';
  return `font-size: var(--font-size-${actualFontSize});`;
};

export const Heading = styled((props: HeadingProps) => (
  <BaseHeading {...props} />
))`
  display: inline-block;
  ${({ fontSize }) => buildFontSizeStyle(fontSize)}
`;
