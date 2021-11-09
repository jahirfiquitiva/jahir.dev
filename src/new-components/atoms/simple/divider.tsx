import tw, { styled } from 'twin.macro';

import {
  Component,
  ComponentProps,
  ComponentWithGradientProps,
  gradientToClassName,
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
  border-0
`;

const ThinDivider = styled(BaseDivider)`
  ${tw`h-thin-divider`}
`;

export const Divider: Component<DividerProps> = (props) => {
  const { gradientColor, thin } = props;
  const className = gradientToClassName(gradientColor, false, true);
  const tailwind = gradientToTailwind(gradientColor);
  if (thin) {
    return <ThinDivider css={tailwind} className={className} />;
  }
  return <BaseDivider css={tailwind} className={className} />;
};
