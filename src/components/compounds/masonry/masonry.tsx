'use client';
// Heavily based on https://github.com/cedricdelpoux/react-responsive-masonry
import { cx } from 'classix';
import { Children, useMemo } from 'react';

import { useWindowDimensions } from '@/hooks/use-window-dimensions';
import type { FC, ComponentChild } from '@/types';

import { MasonryColumn, MasonryGrid } from './masonry.styles';
import { type MasonryBreakpoints } from './masonry.types.d';
import {
  buildMasonryColumns,
  defaultBreakpoints,
  mapBreakpointsAndColumns,
} from './masonry.utils';

interface MasonryProps {
  breakpoints?: MasonryBreakpoints;
  gap?: number;
}

export const Masonry: FC<MasonryProps> = (props) => {
  const { breakpoints: customBreakpoints, gap = 0, children } = props;

  const childrenCount = Children.count(children);
  const { width: windowWidth } = useWindowDimensions();

  const allBreakpoints = useMemo<MasonryBreakpoints>(
    () => ({
      ...defaultBreakpoints,
      ...(customBreakpoints || {}),
    }),
    [customBreakpoints],
  );

  const mappedBreakpoints = useMemo<Record<number, number>>(
    () => mapBreakpointsAndColumns(allBreakpoints),
    [allBreakpoints],
  );

  const columnsCount = useMemo<number>(() => {
    const breakpoints = Object.keys(mappedBreakpoints)
      .sort((a, b) => Number(a) - Number(b))
      .map((breakpoint) => Number(breakpoint));

    let count = breakpoints.length > 0 ? mappedBreakpoints[breakpoints[0]] : 1;
    breakpoints.forEach((breakpoint) => {
      if (breakpoint < windowWidth + 1) {
        count = mappedBreakpoints[breakpoint];
      }
    });
    return count || 1;
  }, [windowWidth, mappedBreakpoints]);

  const columns = useMemo<Array<Array<ComponentChild>>>(() => {
    return buildMasonryColumns(children, columnsCount);
  }, [children, columnsCount]);

  const className = useMemo<string>(() => {
    const classes: Array<string> = [];
    Object.keys(allBreakpoints).forEach((breakpoint) => {
      const bp = breakpoint as keyof typeof allBreakpoints;
      classes.push(
        `${bp === 'default' ? '' : `${bp}:`}grid-cols-${allBreakpoints[bp]}`,
      );
    });
    return classes.join(' ');
  }, [allBreakpoints]);

  console.error('rendered masonry');
  return (
    <MasonryGrid
      className={cx(
        className,
        childrenCount <= 0 &&
          'hidden invisible pointer-events-none select-none',
      )}
      style={{ gap: `${gap / 16}rem` }}
    >
      {columns.map((col, index) => {
        return (
          <MasonryColumn key={`col-${index}`} style={{ gap: `${gap / 16}rem` }}>
            {col.map((element) => element)}
          </MasonryColumn>
        );
      })}
    </MasonryGrid>
  );
};
