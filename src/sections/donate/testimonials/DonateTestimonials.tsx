import { Heading } from '@/components/atoms';
import {
  Loading,
  Masonry,
  type MasonryBreakpoints,
} from '@/components/compounds';
import { useSponsors } from '@/providers/sponsors';
import { breakpointsValues } from '@/stitches';

import { DonateTestimonialCard } from './DonateTestimonialCard';

const masonryBreakpoints: MasonryBreakpoints = {};
masonryBreakpoints['0'] = 1;
masonryBreakpoints[(breakpointsValues['tablet-sm'] || 0).toString()] = 2;
masonryBreakpoints[(breakpointsValues['tablet-md'] || 0).toString()] = 3;

export const DonateTestimonials = () => {
  const { testimonials } = useSponsors();

  if (!testimonials || !testimonials.length) return null;
  return (
    <>
      <Heading as={'h4'}>Don&apos;t just take my word for it</Heading>
      <Masonry
        breakpoints={masonryBreakpoints}
        gap={'calc($$verticalContentPadding / 4)'}
      >
        {testimonials.map((testimonial, index) => {
          return (
            <DonateTestimonialCard
              key={index}
              content={testimonial.content}
              sponsor={testimonial.sponsor}
            />
          );
        })}
      </Masonry>
    </>
  );
};
