import { Children, isValidElement, useMemo } from 'react';
import tw from 'twin.macro';

import useWindowWidth from '~/hooks/useWindowWidth';
import { Component, ComponentProps, ComponentChild } from '~/types';

const MasonryColumn = tw.div`
  flex
  flex-col
  justify-start
  flex-1
  align-content[stretch]
  box-sizing[border-box]
  all-child:(box-sizing[border-box])
`;

const MasonryGrid = tw.div`
  flex
  flex-row
  justify-center
  w-full
  max-w-full
  align-content[stretch]
  box-sizing[border-box]
`;

export type MasonryBreakpoints = { [key: string | number]: number };

interface MasonryProps extends ComponentProps {
  breakpoints?: MasonryBreakpoints;
  gap?: string | 0;
}

// Starting from 0px width, show items in 1 column
const defaultBreakpoints: MasonryBreakpoints = { 0: 1 };

const mapColumnsBreakPoints = (
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

const buildMasonryColumns = (
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

export const Masonry: Component<MasonryProps> = (props) => {
  const {
    breakpoints = defaultBreakpoints,
    gap = 0,
    children,
    className,
    style,
  } = props;

  const windowWidth = useWindowWidth();

  const mappedBreakpoints = useMemo<MasonryBreakpoints>(() => {
    return mapColumnsBreakPoints(breakpoints);
  }, [breakpoints]);

  const columnsCount = useMemo<number>(() => {
    const breakpoints = Object.keys(mappedBreakpoints)
      .sort((a, b) => Number(a) - Number(b))
      .map((breakpoint) => Number(breakpoint));

    let count = breakpoints.length > 0 ? mappedBreakpoints[breakpoints[0]] : 1;
    breakpoints.forEach((breakpoint) => {
      if (breakpoint < windowWidth) {
        count = mappedBreakpoints[breakpoint];
      }
    });
    return count;
  }, [windowWidth, mappedBreakpoints]);

  const columns = useMemo<Array<Array<ComponentChild>>>(() => {
    return buildMasonryColumns(children, columnsCount);
  }, [children, columnsCount]);

  return (
    <MasonryGrid className={className} style={{ ...style, gap }}>
      {columns.map((col, index) => {
        return (
          <MasonryColumn key={`col-${index}`} style={{ gap }}>
            {col.map((element) => element)}
          </MasonryColumn>
        );
      })}
    </MasonryGrid>
  );
};
