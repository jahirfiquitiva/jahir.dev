import styled from '@emotion/styled';

import { Component, ComponentProps } from '~/elements/fc';
import {
  ComponentWithGradientProps,
  gradientToClassName,
} from '~/elements/props';

interface DividerProps extends ComponentProps, ComponentWithGradientProps {}

const BaseDivider = styled.hr`
  -webkit-text-fill-color: unset;
  -webkit-background-clip: unset;
  background-clip: unset;
`;

export const Divider: Component<DividerProps> = (props) => {
  const { gradientColor } = props;
  return (
    <BaseDivider
      className={`divider ${gradientToClassName(gradientColor, false, true)}`}
    />
  );
};
