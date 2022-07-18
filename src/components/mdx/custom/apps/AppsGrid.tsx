import { useMemo } from 'react';

import type { FC } from '@/types';
import { styled, theme } from '~/stitches';

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

const Grid = styled('div', {
  $$columns: 2,
  m: 0,
  display: 'grid',
  gridTemplateColumns: 'repeat($$columns, minmax(0, 120px))',
  backdropFilter: 'blur(10px)',
  boxShadow: '0 0 4px 2px $toolbar-glow',
  borderRadius: '$space$10',
  gap: '$16',
  p: '$16 $12',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.colors.divider?.value || '$divider',
  '@mobile-md': {
    $$columns: 3,
    gridTemplateColumns: 'repeat($$columns, minmax(0, 108px))',
  },
  '@tablet-sm': {
    $$columns: 5,
    p: '$28',
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
      <Grid>
        {sortedApps.map((item, index) => {
          return <AppItem item={item} key={index} />;
        })}
      </Grid>
    </GridContainer>
  );
};
