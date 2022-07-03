import { styled } from '~/stitches';

export const Button = styled('button', {
  backgroundColor: '$accent',
  '&:hover': {
    backgroundColor: '$accent-dark',
  },
});
