// Heavily based on https://github.com/cedricdelpoux/react-responsive-masonry
import { cx } from 'classix';
import { Children } from 'react';

import type { FC } from '@/types';

import { MasonryColumns } from './masonry.columns';
import { MasonryGrid } from './masonry.styles';
import { type MasonryBreakpoints } from './masonry.types.d';
import { defaultBreakpoints, mapBreakpointsAndColumns } from './masonry.utils';

interface MasonryProps {
  breakpoints?: MasonryBreakpoints;
  gap?: number;
  itemKey: string;
}

const breakpointsToClassName = (breakpoints: MasonryBreakpoints): string => {
  const classes: Array<string> = [];
  Object.keys(breakpoints).forEach((breakpoint) => {
    const bp = breakpoint as keyof typeof breakpoints;
    classes.push(
      `${bp === 'default' ? '' : `${bp}:`}grid-cols-${breakpoints[bp]}`,
    );
  });
  return classes.join(' ');
};

export const Masonry: FC<MasonryProps> = (props) => {
  const { breakpoints: customBreakpoints, gap = 0, children, itemKey } = props;
  const childrenCount = Children.count(children);

  const allBreakpoints = {
    ...defaultBreakpoints,
    ...(customBreakpoints || {}),
  };
  const mappedBreakpoints = mapBreakpointsAndColumns(allBreakpoints);
  const className = breakpointsToClassName(allBreakpoints);

  return (
    <MasonryGrid
      className={cx(
        className,
        childrenCount <= 0 &&
          'hidden invisible pointer-events-none select-none',
      )}
      style={{ gap: `${gap / 16}rem` }}
    >
      <MasonryColumns
        itemKey={itemKey}
        widthAndColumns={mappedBreakpoints}
        style={{ gap: `${gap / 16}rem` }}
      >
        {children}
      </MasonryColumns>
    </MasonryGrid>
  );
};
