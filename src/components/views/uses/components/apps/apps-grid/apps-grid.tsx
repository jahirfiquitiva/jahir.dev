import { useMemo } from 'react';

import type { FC } from '@/types';

import { AppItem, type AppItemProps } from '../app-item';

import {GridContainer, Grid} from './apps-grid.styles'

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
