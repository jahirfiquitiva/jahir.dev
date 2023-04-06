import { styled } from '~/stitches';

const areasListToString = (areas: Array<Array<string>>): string =>
  areas.map((row) => `'${row.join(' ')}'`).join('\n ');

export const StyledGrid = styled('div', {
  display: 'grid',
  gap: '$16',
  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  gridTemplateAreas: areasListToString([
    ['one', 'two'],
    ['three', 'five'],
    ['three', 'six'],
    ['eight', 'eight'],
    ['seven', 'four'],
    ['nine', 'four'],
    ['eleven', 'eleven'],
    ['ten', 'twelve'],
    ['thirteen', 'fourteen'],
    ['fifteen', 'fifteen'],
    ['sixteen', '.....'],
  ]),
  '@mobile-lg': {
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    gridTemplateAreas: areasListToString([
      ['one', 'two', 'three'],
      ['four', 'five', 'three'],
      ['four', 'six', 'seven'],
      ['eight', 'eight', 'nine'],
      ['ten', 'eleven', 'eleven'],
      ['twelve', 'thirteen', 'fourteen'],
      ['fifteen', 'fifteen', 'sixteen'],
    ]),
  },
  '@tablet-md': {
    gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
    gridTemplateAreas: areasListToString([
      ['one', 'two', 'five', 'three'],
      ['four', 'seven', 'nine', 'three'],
      ['four', 'eight', 'eight', 'six'],
      ['eleven', 'eleven', 'ten', 'twelve'],
      ['thirteen', 'fourteen', 'fifteen', 'fifteen'],
      ['sixteen', '.....', '.....', '.....'],
    ]),
  },
});

export const GridItem = styled('div', {
  backgroundColor: 'rgba($accent-shadow / 0.012)',
  border: '1px solid $divider',
  width: '100%',
  height: '100%',
  minHeight: '48px',
  aspectRatio: '1 / 1',
  variants: {
    tall: {
      true: {
        aspectRatio: '1 / 2',
      },
    },
    wide: {
      true: {
        aspectRatio: '2 / 1',
      },
    },
  },
});
