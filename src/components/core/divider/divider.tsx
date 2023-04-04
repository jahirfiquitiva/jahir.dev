import { styled } from '~/stitches';

export const Divider = styled('hr', {
  my: '$20',
  mx: 0,
  height: '1px',
  border: 'none',
  backgroundColor: '$divider',
  '@desktop': {
    my: '$32',
  },
});