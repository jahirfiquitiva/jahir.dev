import { useMemo } from 'react';

import type { FC } from '@/types';
import { styled } from '~/stitches';

import { AppItem, type AppItemProps } from './AppItem';

const GridContainer = styled('div', {
  my: '$16',
  borderRadius: '$space$16',
  overflow: 'hidden',
  boxShadow: '0 0 4px 2px $toolbar-glow',
  backgroundColor: 'rgba(9 17 34 / 0.006)',
  dark: { backgroundColor: 'rgba(235 240 251 / 0.008)' },
  border: 'none',
  backgroundAttachment: 'fixed',
  backgroundImage: "url('/static/images/blog/uses/wallpaper.jpeg')",
  backgroundSize: 'contain',
  backgroundRepeat: 'none',
  backgroundPosition: 'center',
});

const Grid = styled('ol', {
  $$columns: 3,
  m: 0,
  display: 'grid',
  gridTemplateColumns: 'repeat($$columns, minmax(0, 120px))',
  backdropFilter: 'blur(10px)',
  boxShadow: '0 0 4px 2px $toolbar-glow',
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

interface AppsGridProps {
  items: Array<AppItemProps>;
}

export const AppsGrid: FC<AppsGridProps> = ({ items }) => {
  const sortedApps = useMemo(() => {
    return items.sort(function (a, b) {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });
  }, [items]);

  return (
    <GridContainer>
      <Grid className={'apps-grid'}>
        {sortedApps.map((item, index) => {
          return <AppItem item={item} key={index} />;
        })}
      </Grid>
    </GridContainer>
  );
};
