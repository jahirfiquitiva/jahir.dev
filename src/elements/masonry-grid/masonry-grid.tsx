import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

import { Component, ComponentProps } from '~/elements/fc';

export type MasonryBreakpoints = { [key: string | number]: number };

interface MasonryGridProps extends ComponentProps {
  breakpoints?: MasonryBreakpoints;
  gap?: string | 0;
}

export const MasonryGrid: Component<MasonryGridProps> = (props) => {
  const { breakpoints, gap, children, className } = props;
  return (
    <ResponsiveMasonry columnsCountBreakPoints={breakpoints} className={className}>
      <Masonry gutter={gap}>{children}</Masonry>
    </ResponsiveMasonry>
  );
};
