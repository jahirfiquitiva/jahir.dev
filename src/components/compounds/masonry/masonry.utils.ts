import { Children, isValidElement } from 'react';

import type { ComponentChild } from '@/types';

import type { BreakpointName, MasonryBreakpoints } from './masonry.types.d';

const breakpointsAndMinWidth: Record<BreakpointName, number> = {
  default: 0,
  'mobile-sm': 320,
  'mobile-md': 375,
  'mobile-lg': 425,
  'tablet-sm': 596,
  'tablet-md': 768,
  'tablet-lg': 792,
  desktop: 960,
};

export const defaultBreakpoints: MasonryBreakpoints = {
  // mobile
  default: 1,
  // tablet-sm
  'tablet-sm': 2,
};
export const mapBreakpointsAndColumns = (
  breakpoints: MasonryBreakpoints,
): Record<number, number> => {
  const minWidthAndColumns: Record<number, number> = {};
  Object.keys(breakpoints).forEach((breakpoint) => {
    const bp = breakpoint as BreakpointName;
    const minWidth = breakpointsAndMinWidth[bp];
    if (typeof minWidth !== 'undefined')
      minWidthAndColumns[minWidth] = breakpoints[bp] || 1;
  });
  return minWidthAndColumns;
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
