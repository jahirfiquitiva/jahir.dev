import { Img } from '@/old/components/core';
import { styled } from '~/stitches';

export const DoodleImg = styled(Img, {
  $$shadowSize: 0,
  $$shadowColor: '$colors$illustrations-shadow',
  width: '100%',
  height: 'auto',
  mx: 'auto',
  aspectRatio: '1 / 1',
  maxWidth: 192,
  '@mobile-lg': { maxWidth: 220 },
  '@tablet-sm': { minWidth: 220 },
  filter:
    'drop-shadow(-$$shadowSize -$$shadowSize calc($$shadowSize / 2) $$shadowColor)' +
    ' drop-shadow($$shadowSize $$shadowSize calc($$shadowSize / 2) $$shadowColor)' +
    ' drop-shadow(-$$shadowSize $$shadowSize calc($$shadowSize / 2) $$shadowColor)' +
    ' drop-shadow($$shadowSize -$$shadowSize calc($$shadowSize / 2) $$shadowColor)',
  variants: {
    flip: {
      true: {
        transform: 'scaleX(-1)',
      },
    },
  },
});
