import { Masonry, type MasonryBreakpoints } from '@/components/compounds';
import { breakpointsValues } from '@/stitches';
import type { FC } from '@/types';
import { theme } from '~/stitches';

import { HardwareItem, type HardwareItemProps } from './HardwareItem';

const masonryBreakpoints: MasonryBreakpoints = {};
masonryBreakpoints['0'] = 1;
masonryBreakpoints[(breakpointsValues['mobile-sm'] || 0).toString()] = 1;
masonryBreakpoints[(breakpointsValues['tablet-sm'] || 0).toString()] = 3;
masonryBreakpoints[(breakpointsValues['tablet-md'] || 0).toString()] = 4;

export const HardwareGrid: FC<{ items: Array<HardwareItemProps> }> = ({
  items,
}) => {
  return (
    <Masonry
      breakpoints={masonryBreakpoints}
      gap={theme.space['16'].value}
    >
      {items.map((item, index) => {
        return <HardwareItem item={item} key={index} />;
      })}
    </Masonry>
  );
};
