import { styled } from '~/stitches';

export const Section = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  px: '1rem',
  '@tablet-lg': {
    px: 0,
  },
});
