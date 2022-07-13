import { gradientVariants } from '@/stitches/utils/gradient';
import { shadowVariants } from '@/stitches/utils/shadow';
import { styled } from '~/stitches';

const gradientEnabledCss = {
  textShadow: 'none',
  color: '$transparent',
  background: 'linear-gradient(to right, $$gradientStart, $$gradientEnd)',
  backgroundClip: 'text',
};

export const Heading = styled('h1', {
  $$textShadowSize: '2px',
  display: 'inline-flex',
  alignItems: 'center',
  alignSelf: 'flex-start',
  textShadow: '$$textShadowSize $$textShadowSize 0 $$textShadowColor',

  dark: gradientEnabledCss,

  variants: {
    gradient: gradientVariants(),
    shadow: shadowVariants(),
    forceGradient: {
      true: gradientEnabledCss,
    },
  },
});
