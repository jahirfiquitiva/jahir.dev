import { styled } from '~/stitches';

export const GridContainer = styled('div', {
  borderRadius: '$space$16',
  overflow: 'hidden',
  boxShadow: '0 0 4px 2px $accent-shadow',
  backgroundColor: 'rgba(9 17 34 / 0.006)',
  dark: { backgroundColor: 'rgba(235 240 251 / 0.008)' },
  border: 'none',
  backgroundAttachment: 'fixed',
  backgroundImage: "url('/static/images/blog/uses/wallpaper.jpg')",
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
});

export const Grid = styled('ol', {
  $$columns: 3,
  m: 0,
  display: 'grid',
  gridTemplateColumns: 'repeat($$columns, minmax(0, 120px))',
  backdropFilter: 'blur(10px)',
  boxShadow: '0 0 4px 2px $accent-shadow',
  borderRadius: '$space$10',
  rowGap: '$20',
  columnGap: '$16',
  p: '$24 $12',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(12 18 30 / .3)',
  listStyle: 'none',
  '& > li': {
    display: 'block',
  },
  '@mobile-md': {
    $$columns: 3,
    gridTemplateColumns: 'repeat($$columns, minmax(0, 108px))',
  },
  '@mobile-lg': {
    $$columns: 4,
  },
  '@tablet-sm': {
    $$columns: 5,
    py: '$32',
    px: '$24',
  },
  '@tablet-lg': {
    py: '$48',
  },
});
