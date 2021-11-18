import { useMemo, Children } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import tw from 'twin.macro';

import { Component, ComponentProps } from '~/types';

export type MasonryBreakpoints = { [key: string | number]: number };

interface MasonryGridProps extends ComponentProps {
  breakpoints?: MasonryBreakpoints;
  gap?: string | 0;
}

const mapColumnsBreakPoints = (breakpoints?: MasonryBreakpoints) => {
  if (!breakpoints) return {};
  const mappedBreakpoints: MasonryBreakpoints = {};
  for (const key of Object.keys(breakpoints)) {
    const newKey = key.endsWith('px') ? key.substring(0, key.length - 2) : key;
    mappedBreakpoints[newKey] = breakpoints[key];
  }
  return mappedBreakpoints;
};

const BaseMasonryGrid: Component<MasonryGridProps> = (props) => {
  const { breakpoints, gap, children, ...otherProps } = props;

  const mappedBreakpoints = useMemo(() => {
    return mapColumnsBreakPoints(breakpoints);
  }, [breakpoints]);

  const childrenCount = Children.count(children);
  if (!childrenCount) return null;
  return (
    <ResponsiveMasonry
      columnsCountBreakPoints={mappedBreakpoints}
      {...otherProps}
    >
      <Masonry gutter={gap}>{children}</Masonry>
    </ResponsiveMasonry>
  );
};

export const MasonryGrid = tw(BaseMasonryGrid)`w-full`;
