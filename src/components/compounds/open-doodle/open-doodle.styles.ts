import { Img } from '@/components/core';
import { styled } from '~/stitches';

export const DoodleImg = styled(Img, {
  $$shadowSize: 0,
  $$shadowColor: '$colors$illustrations-shadow',
  width: '100%',
  height: 'auto',
  maxWidth: 320,
  mx: 'auto',
  aspectRatio: '1 / 1',
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