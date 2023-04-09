import { styled } from '~/stitches';

export const Section = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  px: '$14',
  '@tablet-md': {
    px: 0,
  },
  variants: {
    centered: {
      true: {
        justifyContent: 'center',
      },
    },
  },
});
