import { styled } from '~/stitches';

export const Button = styled('button', {
  minHeight:'32px',
  border: 'none',
  backgroundColor: '$accent',
  fontFamily: '$manrope',
  fontWeight: 600,
  hocus: {
    backgroundColor: '$accent-dark',
  },
});
