'use client';
// Heavily based on https://github.com/cedricdelpoux/react-responsive-masonry
import { cx } from 'classix';
import { Children, useMemo } from 'react';

import { useWindowDimensions } from '@/hooks/use-window-dimensions';
import type { FC, ComponentChild } from '@/types';

import { MasonryColumn, MasonryGrid } from './masonry.styles';
import { MasonryBreakpoints, breakpointsAndMinWidth } from './masonry.types';
import { buildMasonryColumns, defaultBreakpoints } from './masonry.utils';

interface MasonryProps {
  breakpoints?: MasonryBreakpoints;
  gap?: number;
}

export const Masonry: FC<MasonryProps> = (props) => {
  const { breakpoints: customBreakpoints, gap = 0, children } = props;

  const childrenCount = Children.count(children);
  const { width: windowWidth } = useWindowDimensions();

  const breakpoints = useMemo<MasonryBreakpoints>(
    () => ({
      ...defaultBreakpoints,
      ...(customBreakpoints || {}),
    }),
    [customBreakpoints],
  );

  const columnsCount = useMemo<number>(() => {
    const breakpoint = Object.keys(breakpointsAndMinWidth).find(
      (breakpoint) => {
        return (
          breakpointsAndMinWidth[
            breakpoint as keyof typeof breakpointsAndMinWidth
          ] <
          windowWidth + 1
        );
      },
    ) as keyof typeof breakpointsAndMinWidth;
    return breakpoints[breakpoint] || 1;
  }, [windowWidth, breakpoints]);

  const columns = useMemo<Array<Array<ComponentChild>>>(() => {
    return buildMasonryColumns(children, columnsCount);
  }, [children, columnsCount]);

  const className = useMemo<string>(() => {
    const classes: Array<string> = [];
    Object.keys(breakpoints).forEach((breakpoint) => {
      const bp = breakpoint as keyof typeof breakpoints;
      classes.push(
        `${bp === 'default' ? '' : `${bp}:`}grid-cols-${breakpoints[bp]}`,
      );
    });
    return classes.join(' ');
  }, [breakpoints]);

  return (
    <MasonryGrid
      className={cx(
        className,
        `gap-[${gap / 16}rem]`,
        childrenCount <= 0 &&
          'hidden invisible pointer-events-none select-none',
      )}
    >
      {columns.map((col, index) => {
        return (
          <MasonryColumn
            key={`col-${index}`}
            className={`gap-[${gap / 16}rem]`}
          >
            {col.map((element) => element)}
          </MasonryColumn>
        );
      })}
    </MasonryGrid>
  );
};
