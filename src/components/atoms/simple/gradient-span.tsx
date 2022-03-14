import { css } from '@emotion/react';
import { useMemo } from 'react';

import { useTheme } from '~/providers/theme';
import {
  Component,
  ComponentProps,
  ComponentWithGradientProps,
  GradientOptions,
  gradientToCss,
} from '~/types';

export const forcedGradientStyles = css`
  --from-gradient-color: var(--divider);
  --to-gradient-color: var(--divider);
  display: inline-block;
  color: rgba(0, 0, 0, 0);
  background-clip: text;
  background-image: linear-gradient(
    to right,
    var(--from-gradient-color),
    var(--to-gradient-color)
  );
`;

const onHoverOnlyStyles = css`
  color: inherit;
  background: none;

  &:hover,
  &:focus {
    color: rgba(0, 0, 0, 0);
    background-clip: text;
    background-image: linear-gradient(
      to right,
      var(--from-gradient-color),
      var(--to-gradient-color)
    );
  }
`;

interface GradientSpanProps extends ComponentProps, ComponentWithGradientProps {
  gradientColor: GradientOptions;
  gradientOnHoverOnly?: boolean;
  onClick?: () => void;
}

export const GradientSpan: Component<GradientSpanProps> = (props) => {
  const { isDark, themeReady } = useTheme();
  const {
    gradientColor,
    gradientOnHoverOnly,
    forceGradient,
    children,
    ...otherProps
  } = props;

  const gradientCss = gradientToCss(gradientColor);

  const spanCss = useMemo(() => {
    if (!themeReady && !forceGradient) return [];

    const gradientStyles =
      forceGradient || isDark
        ? [
            forcedGradientStyles,
            css`
              text-shadow: none;
            `,
          ]
        : [];
    return [
      ...gradientStyles,
      gradientCss,
      ...(gradientOnHoverOnly ? [onHoverOnlyStyles] : []),
    ];
  }, [themeReady, isDark, gradientOnHoverOnly, gradientCss, forceGradient]);

  return (
    <span css={spanCss} {...otherProps}>
      {children}
    </span>
  );
};
