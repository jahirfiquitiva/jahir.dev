/* eslint-disable max-len */
import { styled } from '~/stitches';

export const Article = styled('article', {
  '& > img:first-of-type, & > figure:first-of-type': {
    my: 'calc($$verticalContentPadding / 2)',
  },
  '& > img, & > p > img': {
    my: 'calc($$verticalContentPadding / 4)',
  },
});
