import { styled } from '~/stitches';

export const Grid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1fr)',
  '@tablet-sm': {
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    gap: '$16',
  },
});

export const GridColumn = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
});
