import { tw } from '@/utils/cx';

import { Link } from '@/components/core/link/link';

export const List = tw.ul`
  max-w-full
  list-none
  flex
  flex-col
  items-start
  flex-wrap
  gap-y-8
  tablet-sm:flex-row
  tablet-sm:items-center
  tablet-sm:gap-x-16
`;

export const FooterLink = tw(Link)`
  h-full
  inline-flex
  items-center
  self-start
  text-3xs
  text-tertiary-txt
  font-manrope
  font-semibold
  rounded-4
  group/link
`;

export const FooterLinkSpan = tw.span`
  decoration-2
  bg-gradient-to-r
  from-tertiary-txt
  to-tertiary-txt
  text-transparent
  bg-clip-text
  group-hocus/link:saturate-125
  dark:group-hocus/link:saturate-150
`;
