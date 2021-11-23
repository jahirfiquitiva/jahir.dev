import styled from '@emotion/styled';

import {
  Component,
  ComponentProps,
  ComponentWithGradientProps,
  gradientToCss,
  mediaQueries,
} from '~/types';

interface DividerProps extends ComponentProps, ComponentWithGradientProps {
  thin?: boolean;
}

const BaseDivider = styled.hr`
  --from-gradient-color: var(--divider);
  --to-gradient-color: var(--divider);
  margin: 1.2rem 0;
  height: 4px;
  border: none;
  background-image: linear-gradient(
    to right,
    var(--from-gradient-color),
    var(--to-gradient-color)
  );

  ${mediaQueries.desktop} {
    margin: 2rem 0;
  }
`;

const ThinDivider = styled(BaseDivider)`
  height: 1px;
`;

export const Divider: Component<DividerProps> = (props) => {
  const { gradientColor, thin, ...otherProps } = props;
  const css = gradientToCss(gradientColor);

  if (thin) return <ThinDivider css={css} {...otherProps} />;
  return <BaseDivider css={css} {...otherProps} />;
};
