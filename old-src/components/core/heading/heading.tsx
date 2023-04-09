import type { ElementType } from 'react';
import Balancer from 'react-wrap-balancer';

import {
  gradientVariants,
  gradientOptionsArray,
  GradientOption,
} from '@/stitches/utils/gradient';
import { shadowVariants } from '@/stitches/utils/shadow';
import type { GetComponentProps } from '@/types';
import { styled, type StitchesCSS } from '~/stitches';

export const gradientEnabledCss = {
  textShadow: 'none',
  color: '$transparent',
  background: 'linear-gradient(to right, $$gradientStart, $$gradientEnd)',
  backgroundClip: 'text',
};

type GradientCompoundVariantCss = {
  gradient: GradientOption;
  css: StitchesCSS;
};

const mapGradientOptionsToCss = (): Array<GradientCompoundVariantCss> => {
  return gradientOptionsArray.map((key) => {
    return {
      gradient: key,
      css: {
        dark: gradientEnabledCss,
      },
    } as GradientCompoundVariantCss;
  });
};

const StyledHeading = styled('h1', {
  $$textShadowSize: '2px',
  display: 'inline-block',
  alignItems: 'center',
  alignSelf: 'flex-start',
  textShadow: '$$textShadowSize $$textShadowSize 0 $$textShadowColor',
  '& > span': { width: '100%' },
  dark: { textShadow: 'none' },

  variants: {
    gradient: gradientVariants(),
    shadow: shadowVariants(),
    forceGradient: {
      true: gradientEnabledCss,
    },
  },

  compoundVariants: mapGradientOptionsToCss(),
});

export const Heading = (
  props: GetComponentProps<typeof StyledHeading> & {
    as?: ElementType;
    balancerRatio?: number;
  },
) => {
  const { children, balancerRatio, ...otherProps } = props;
  return (
    <StyledHeading {...otherProps}>
      <Balancer ratio={balancerRatio}>{children}</Balancer>
    </StyledHeading>
  );
};
