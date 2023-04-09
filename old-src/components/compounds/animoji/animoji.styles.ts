import { Img } from '@/old/components/core';
import { styled } from '~/stitches';

export const AnimojiImg = styled(Img, {
  backgroundColor: '$accent-dark',
  borderRadius: '50%',
  transform: 'rotate(1deg)',
  transition: 'transform .1s ease-in-out',
  hocus: {
    transform: 'rotate(-8deg)',
  },
});
