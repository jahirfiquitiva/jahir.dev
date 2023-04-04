import { styled } from '~/stitches';

export const MasonryGrid = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  width: '100%',
  maxWidth: '100%',
  alignContent: 'stretch',
  boxSizing: 'border-box',
  variants: {
    noChildren: {
      true: {
        visibility: 'hidden',
        opacity: 0,
        pointerEvents: 'none',
        userSelect: 'none',
      },
    },
  },
});

export const MasonryColumn = styled(MasonryGrid, {
  flexDirection: 'column',
  justifyContent: 'flex-start',
  flex: 1,
  width: 0,
  py: '$2',
});