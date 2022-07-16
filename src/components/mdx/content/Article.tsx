import { styled } from '~/stitches';

export const Article = styled('article', {
  scrollMarginTop: '200px',
  '& > p': {
    width: '100%',
    marginBlock: 0,
    marginInline: 0,
  },
});
