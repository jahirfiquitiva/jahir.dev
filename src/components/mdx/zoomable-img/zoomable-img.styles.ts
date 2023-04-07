import { Img } from '@/components/core';
import { styled } from '~/stitches';

export const StyledImg = styled(Img, {
  '&[data-zoomable="true"]': {
    cursor: 'zoom-in',
    canHover: {
      '&.zoomed': {
        cursor: 'zoom-out',
        mx: '-$64',
        minWidth: 'calc(100% + calc($space$64 * 2))',
      },
    },
  },
});
