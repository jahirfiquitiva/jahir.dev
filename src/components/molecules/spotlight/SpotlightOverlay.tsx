import { KBarPositioner } from 'kbar';

import { styled } from '~/stitches';

export const SpotlightOverlay = styled(KBarPositioner, {
  zIndex: 5,
  backgroundColor: '$toolbar',
  backdropFilter: 'blur(4px)',
});
