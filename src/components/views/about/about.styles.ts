import { styled } from '~/stitches';

export const PhotoFigure = styled('figure', {
  display: 'flex',
  flexDirection: 'column',
  '& img': {
    width: '100%',
    height: 'auto',
    borderRadius: '$space$8',
    border: '1px solid $divider',
  },
});

export const Intro = styled('p', {
  color: '$text-primary',
  fontSize: '$sm',
});
