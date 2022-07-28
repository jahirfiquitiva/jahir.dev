import { DotsDivider, Heading, Section } from '@/components/atoms';
import { Masonry, type MasonryBreakpoints } from '@/components/compounds';
import { breakpointsValues } from '@/stitches';
import type { FC } from '@/types';

const masonryBreakpoints: MasonryBreakpoints = {};
masonryBreakpoints['0'] = 1;
masonryBreakpoints[(breakpointsValues['mobile-sm'] || 0).toString()] = 1;
masonryBreakpoints[(breakpointsValues['tablet-sm'] || 0).toString()] = 2;

export const ActivityGrid: FC = (props) => {
  if (!props.children) return null;
  return (
    <>
      <DotsDivider />
      <Section id={'activity'} css={{ gap: 0, px: 0 }}>
        <Heading as={'h4'}>Activity</Heading>
        <Masonry
          breakpoints={masonryBreakpoints}
          gap={'calc($$verticalContentPadding / 2.5)'}
        >
          {props.children}
        </Masonry>
      </Section>
    </>
  );
};
