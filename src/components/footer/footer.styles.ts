import { tw } from '@/utils/cx';

import { Link } from '../link';

export const StyledFooter = tw.footer`
  w-full
  max-w-site
  mx-auto
  grid
  grid-cols-2
  gap-6
  px-2.5
  pt-6 pb-8
  border-t
  border-t-divider
  mobile-lg:px-3.5
  mobile-lg:pt-7
  tablet-sm:px-3
  tablet-sm:pt-8
  tablet-sm:pb-12
  tablet-sm:grid-cols-4
  tablet-sm:grid-rows-[1fr_auto]
  tablet-sm:gap-y-4
  tablet-md:px-0
`;

export const Details = tw.div`
  flex
  flex-col
  col-span-2
  gap-3
`;

export const Description = tw.p`
  text-2xs
  text-pretty
  max-w-[32ch]
`;

export const LinksList = tw.ul`
  flex
  flex-col
  gap-3
  tablet-sm:row-span-2
`;

export const FooterLink = tw(Link)`
  text-3xs
  font-manrope
  font-semibold
  transition-colors
  text-transparent
  bg-clip-text
  bg-gradient-to-r
  from-tertiary-txt
  to-tertiary-txt
  hocus:text-transparent
  hocus:from-secondary-txt
  hocus:to-secondary-txt
  hocus:saturate-125
  hocus:dark:saturate-150
`;
