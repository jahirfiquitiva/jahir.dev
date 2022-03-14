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

export const DotsDivider = styled.hr`
  height: 24px;
  margin: 1.6rem 0;
  border: none;
  background-image: url('/static/images/brand/dots-divider.svg');
  background-repeat: no-repeat;
  background-position: center;
  color: var(--divider);
  filter: opacity(0.24);

  & > svg {
    color: var(--divider);
    fill: var(--divider);
  }

  .dark & {
    filter: opacity(0.24) invert(1);
  }

  ${mediaQueries.desktop} {
    margin: 2rem 0;
  }
`;
