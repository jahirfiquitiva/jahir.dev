import { tw } from '@/utils/cx';

import { Img } from '@/components/core/img';

export const StyledList = tw.ul`
  block
  rounded-10
  border border-divider
  list-none
  p-0
`;

export const Header = tw.div`
  max-w-full
  flex
  flex-col-reverse
  mobile-lg:flex-row
  mobile-lg:justify-between
`;

export const MonaGif = tw(Img)`
  max-w-[3rem]
  filter
  drop-shadow-[0_0_2px_#fff]
  mobile-lg:self-end
  mobile-lg:transform
  mobile-lg:-scale-x-100
  mobile-lg:max-w-[3.5rem]
  tablet-sm:max-w-[4rem]
  tablet-lg:max-w-[4.5rem]
`;
