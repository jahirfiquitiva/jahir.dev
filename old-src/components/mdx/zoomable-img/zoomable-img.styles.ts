import { Img } from '@/old/components/core';
import { styled } from '~/stitches';

export const StyledImg = styled(Img, {
  '&[data-zoomable="true"]': {
    canHover: {
      '@tablet-lg': {
        cursor: 'zoom-in',
        '&.zoomed': {
          cursor: 'zoom-out',
          mx: '-$64',
          minWidth: 'calc(100% + calc($space$64 * 2))',
        },
      },
    },
  },
});
