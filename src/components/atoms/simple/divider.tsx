import tw from 'twin.macro';

import {
  Component,
  ComponentProps,
  ComponentWithGradientProps,
  gradientToTailwind,
} from '~/types';

interface DividerProps extends ComponentProps, ComponentWithGradientProps {
  thin?: boolean;
}

const BaseDivider = tw.hr`
  my-12
  h-divider
  bg-gradient-to-r
  from-divider
  to-divider
  border-none

  2xl:(my-20)
`;

const ThinDivider = tw(BaseDivider)`
  h-thin-divider
`;

export const Divider: Component<DividerProps> = (props) => {
  const { gradientColor, thin, ...otherProps } = props;
  const tailwind = gradientToTailwind(gradientColor);

  if (thin) return <ThinDivider css={tailwind} {...otherProps} />;
  return <BaseDivider css={tailwind} {...otherProps} />;
};
