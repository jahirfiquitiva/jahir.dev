'use client';

import { useMemo } from 'react';

import { useWindowDimensions } from '@/hooks/use-window-dimensions';
import type { FC, ComponentChild } from '@/types';

import { MasonryColumn } from './masonry.styles';
import { buildMasonryColumns } from './masonry.utils';

interface MasonryColumnsProps {
  widthAndColumns: Record<number, number>;
  itemKey: string;
}

export const MasonryColumns: FC<MasonryColumnsProps> = (props) => {
  const {
    widthAndColumns: mappedBreakpoints,
    children,
    style,
    itemKey,
  } = props;
  const { width: windowWidth } = useWindowDimensions();

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

  return (
    <>
      {columns.map((col, index) => {
        return (
          <MasonryColumn key={`${itemKey}-col-${index}`} style={style}>
            {col.map((element) => element)}
          </MasonryColumn>
        );
      })}
    </>
  );
};
