import NextImage from 'next/image';

import { styled } from '~/stitches';

export const StyledImg = styled(NextImage, {
  variants: {
    chess: {
      true: {
        // eslint-disable-next-line max-len
        background: 'repeating-conic-gradient($primary 0 90deg, rgba($accent-shadow / 0.24) 0 180deg) 0 0/24px 24px round',
        backgroundClip: 'padding-box'
      }
    }
  }
})