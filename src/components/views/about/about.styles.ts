import { Paragraph } from '@/components/core';
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

export const Intro = styled(Paragraph, {
  color: '$text-primary',
  fontSize: '$sm',
});
