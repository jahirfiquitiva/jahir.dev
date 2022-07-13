import { KBarAnimator } from 'kbar';

import { breakpointsValues } from '@/stitches';
import { styled } from '~/stitches';

export const SpotlightContainer = styled(KBarAnimator, {
  background: '$primary',
  width: '100%',
  // height: 'auto',
  minHeight: '51px',
  overflow: 'hidden',
  maxWidth: breakpointsValues['tablet-sm'] || '32rem',
  mx: 'auto',
  borderRadius: '12px',
  border: '1px solid rgba($colors$toolbar-glow / .12)',
  boxShadow: '0 0 6px 1px rgba($colors$toolbar-glow / .16)',
  // '& > div': { height: '100%' },
  '@tablet-lg': {
    minHeight: '54px',
  },
});
