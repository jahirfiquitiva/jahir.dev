import { styled } from '~/stitches';

export const PhotoFigure = styled('figure', {
  display: 'flex',
  flexDirection: 'column',
  mt: 'calc($$verticalContentPadding / 1.5)',
  mb: 'calc($$verticalContentPadding / 2)',
  '& img': {
    width: '100%',
    height: 'auto',
    borderRadius: '$space$8',
    border: '1px solid $divider',
  },
});

export const Intro = styled('p', {
  color: '$text-primary',
  mt: '$6',
  mb: '$20',
  fontSize: '$sm',
});

export const Paragraph = styled(Intro, {
  color: '$text-secondary',
  my: '$10',
  fontSize: '$xs',
});
