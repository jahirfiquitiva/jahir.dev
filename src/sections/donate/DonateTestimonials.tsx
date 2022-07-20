import { Heading } from '@/components/atoms';
import { Masonry, type MasonryBreakpoints } from '@/components/compounds';
import { breakpointsValues } from '@/stitches';

import { DonateTestimonialCard } from './DonateTestimonialCard';

const masonryBreakpoints: MasonryBreakpoints = {};
masonryBreakpoints['0'] = 1;
masonryBreakpoints[(breakpointsValues['tablet-sm'] || 0).toString()] = 2;
masonryBreakpoints[(breakpointsValues['tablet-md'] || 0).toString()] = 3;

export const DonateTestimonials = () => {
  return (
    <>
      <Heading as={'h4'}>Don&apos;t just take my word for it</Heading>
      <Masonry
        breakpoints={masonryBreakpoints}
        gap={'calc($$verticalContentPadding / 4)'}
      >
        <DonateTestimonialCard author={'Fulanito'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </DonateTestimonialCard>
        <DonateTestimonialCard author={'Pepita'}>
          Scelerisque felis imperdiet proin fermentum leo vel orci porta non.{' '}
        </DonateTestimonialCard>
        <DonateTestimonialCard author={'Carmenza'}>
          Ullamcorper a lacus vestibulum sed arcu non odio.
        </DonateTestimonialCard>
        <DonateTestimonialCard author={'Jake'}>
          Dictumst quisque sagittis purus sit.
        </DonateTestimonialCard>
        <DonateTestimonialCard author={'Finn'}>
          Imperdiet nulla malesuada pellentesque elit.
        </DonateTestimonialCard>
      </Masonry>
    </>
  );
};
