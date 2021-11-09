import styled from '@emotion/styled';

import {
  Component,
  ComponentProps,
  ComponentWithGradientProps,
  gradientToClassName,
} from '~/types';

interface DividerProps extends ComponentProps, ComponentWithGradientProps {
  thin?: boolean;
}

const BaseDivider = styled.hr`
  -webkit-text-fill-color: unset;
  -webkit-background-clip: unset;
  background-clip: unset;
`;

const ThinDivider = styled(BaseDivider)`
  height: 1px;
`;

export const Divider: Component<DividerProps> = (props) => {
  const { gradientColor, thin } = props;
  const className = `divider ${gradientToClassName(
    gradientColor,
    false,
    true,
  )}`.trim();
  if (thin) {
    return <ThinDivider className={className} />;
  }
  return <BaseDivider className={className} />;
};
