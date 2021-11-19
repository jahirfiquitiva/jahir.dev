import { css } from '@emotion/react';

const gradientOptionsArray = [
  'brand-to-blue',
  'blue-to-green',
  'green-to-yellow',
  'yellow-to-orange',
  'orange-to-red',
  'red-to-purple',
  'purple-to-brand',
] as const;

export type GradientOptions = typeof gradientOptionsArray[number];

export interface ComponentWithGradientProps {
  gradientColor?: GradientOptions;
  forceGradient?: boolean;
}

export const gradientToCss = (gradient?: GradientOptions) => {
  if (!gradient) return css``;
  switch (gradient) {
    case 'brand-to-blue': {
      return css`
        --from-gradient-color: var(--gradient-brand);
        --to-gradient-color: var(--gradient-blue);
      `;
    }
    case 'blue-to-green': {
      return css`
        --from-gradient-color: var(--gradient-blue);
        --to-gradient-color: var(--gradient-green);
      `;
    }
    case 'green-to-yellow': {
      return css`
        --from-gradient-color: var(--gradient-green);
        --to-gradient-color: var(--gradient-yellow);
      `;
    }
    case 'yellow-to-orange': {
      return css`
        --from-gradient-color: var(--gradient-yellow);
        --to-gradient-color: var(--gradient-orange);
      `;
    }
    case 'orange-to-red': {
      return css`
        --from-gradient-color: var(--gradient-orange);
        --to-gradient-color: var(--gradient-red);
      `;
    }
    case 'red-to-purple': {
      return css`
        --from-gradient-color: var(--gradient-red);
        --to-gradient-color: var(--gradient-purple);
      `;
    }
    case 'purple-to-brand': {
      return css`
        --from-gradient-color: var(--gradient-purple);
        --to-gradient-color: var(--gradient-brand);
      `;
    }
    default: {
      return css`
        --from-gradient-color: var(--divider);
        --to-gradient-color: var(--divider);
      `;
    }
  }
};
