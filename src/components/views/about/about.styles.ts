import { styled } from '~/stitches';

export const PhotoFigure = styled('figure', {
  display: 'flex',
  flexDirection: 'column',
  my: 'calc($$verticalContentPadding / 3)',
  '& img': {
    width: '100%',
    height: 'auto',
    borderRadius: '$space$8',
    border: '1px solid $divider',
  },
});

export const Intro = styled('p', {
  color: '$text-primary',
  my: 0,
  fontSize: '$sm',
});

export const Paragraph = styled(Intro, {
  color: '$text-secondary',
  my: 0,
  fontSize: '$xs',
});
