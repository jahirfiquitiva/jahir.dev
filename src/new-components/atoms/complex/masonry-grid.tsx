import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import tw from 'twin.macro';

import { Component, ComponentProps } from '~/types';

export type MasonryBreakpoints = { [key: string | number]: number };

interface MasonryGridProps extends ComponentProps {
  breakpoints?: MasonryBreakpoints;
  gap?: string | 0;
}

const BaseMasonryGrid: Component<MasonryGridProps> = (props) => {
  const { breakpoints, gap, children, className } = props;
  return (
    <ResponsiveMasonry
      columnsCountBreakPoints={breakpoints}
      className={className}
    >
      <Masonry gutter={gap}>{children}</Masonry>
    </ResponsiveMasonry>
  );
};

export const MasonryGrid = tw(BaseMasonryGrid)`w-full`;
