// Heavily based on https://github.com/cedricdelpoux/react-responsive-masonry
import { Children, useMemo } from 'react';

import { useWindowDimensions } from '@/hooks/use-window-dimensions';
import type { FC, ComponentChild } from '@/types';

import { MasonryColumn, MasonryGrid } from './masonry.styled';
import type  { MasonryProps } from './masonry.types.d';
import {
  buildMasonryColumns,
  defaultBreakpoints,
  mapColumnsBreakPoints,
} from './masonry.utils';

export const Masonry: FC<MasonryProps> = (props) => {
  const {
    breakpoints = defaultBreakpoints,
    gap = 0,
    children,
    className,
    style,
    css,
  } = props;
  const childrenCount = Children.count(children);
  const { width: windowWidth } = useWindowDimensions();

  const mappedBreakpoints = mapColumnsBreakPoints(breakpoints);

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
    return count;
  }, [windowWidth, mappedBreakpoints]);

  const columns = useMemo<Array<Array<ComponentChild>>>(() => {
    return buildMasonryColumns(children, columnsCount);
  }, [children, columnsCount]);

  return (
    <MasonryGrid
      style={style}
      className={className}
      css={{ ...css, gap }}
      noChildren={childrenCount <= 0}
    >
      {columns.map((col, index) => {
        return (
          <MasonryColumn key={`col-${index}`} css={{ gap }}>
            {col.map((element) => element)}
          </MasonryColumn>
        );
      })}
    </MasonryGrid>
  );
};
