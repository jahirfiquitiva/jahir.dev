import tw from 'twin.macro';

import {
  Component,
  ComponentProps,
  ComponentWithGradientProps,
  GradientOptions,
  gradientToTailwind,
} from '~/types';

export const forcedGradientStyles = tw`
  text-transparent
  bg-gradient-to-r
  bg-clip-text
`;

export const baseGradientStyles = tw`
  inline-block
  dark:(
    text-transparent
    bg-gradient-to-r
    bg-clip-text
  )
`;

interface GradientSpanProps extends ComponentProps, ComponentWithGradientProps {
  gradientColor: GradientOptions;
  onClick?: () => void;
}

export const GradientSpan: Component<GradientSpanProps> = (props) => {
  const { gradientColor, forceGradient, children, ...otherProps } = props;

  const gradientTailwind = gradientToTailwind(gradientColor);

  return (
    <span
      css={[
        forceGradient ? forcedGradientStyles : null,
        tw`dark:(text-shadow-none)`,
        baseGradientStyles,
        gradientTailwind,
      ]}
      {...otherProps}
    >
      {children}
    </span>
  );
};
