import { styled } from '~/stitches';

export const Section = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  px: '.875rem',
  '@tablet-md': {
    px: 0,
  },
});
