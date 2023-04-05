import { Img } from '@/components/core';
import { styled } from '~/stitches';

export const ProjectIcon = styled(Img, {
  aspectRatio: '1 / 1',
  height: 'auto',
  borderRadius: '$space$4',
  '@tablet-sm': {
    minHeight: '100%',
    aspectRatio: '1 / 1',
    maxWidth: 160,
  },
});