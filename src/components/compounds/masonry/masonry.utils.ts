import { Children, isValidElement } from 'react';

import type { ComponentChild } from '@/types';

import type { MasonryBreakpoints } from './masonry.types';

export const defaultBreakpoints: MasonryBreakpoints = {
  // mobile
  default: 1,
  // tablet-sm
  'tablet-sm': 2,
};

export const buildMasonryColumns = (
  children: ComponentChild,
  columnsCount: number,
) => {
  const columns: Array<Array<ComponentChild>> = Array.from(
    { length: columnsCount },
    () => [],
  );

  Children.forEach(children, (child, index) => {
    if (child && isValidElement(child)) {
      columns[index % columnsCount].push(child);
    }
  });

  return columns;
};
