import tw, { css } from 'twin.macro';

import {
  Component,
  ComponentProps,
  ComponentWithGradientProps,
  gradientToTailwind,
} from '~/types';

const forcedGradientSpan = tw`
  text-transparent
  bg-gradient-to-r
  bg-clip-text
`;

const baseGradientSpan = tw`
  inline-block
  dark:(
    text-transparent
    bg-gradient-to-r
    bg-clip-text
  )
`;

interface GradientSpanProps extends ComponentProps, ComponentWithGradientProps {
  onClick?: () => void;
}

export const GradientSpan: Component<GradientSpanProps> = (props) => {
  const { gradientColor, forceGradient, children, ...otherProps } = props;

  const gradientTailwind = gradientToTailwind(gradientColor);

  return (
    <span
      css={[
        forceGradient ? forcedGradientSpan : null,
        css`
          text-shadow: none;
        `,
        baseGradientSpan,
        gradientTailwind,
      ]}
      {...otherProps}
    >
      {children}
    </span>
  );
};
