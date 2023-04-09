import { Children, isValidElement } from 'react';

import type { ComponentChild } from '@/old/types';

import type { MasonryBreakpoints } from './masonry.types.d';

// Starting from 0px width, show items in 1 column
export const defaultBreakpoints: MasonryBreakpoints = { 0: 1 };

export const mapColumnsBreakPoints = (
  breakpoints?: MasonryBreakpoints,
): MasonryBreakpoints => {
  if (!breakpoints) return {};
  const mappedBreakpoints: MasonryBreakpoints = {};
  for (const key of Object.keys(breakpoints)) {
    const newKey = key.endsWith('px') ? key.substring(0, key.length - 2) : key;
    mappedBreakpoints[newKey] = breakpoints[key];
  }
  return mappedBreakpoints;
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