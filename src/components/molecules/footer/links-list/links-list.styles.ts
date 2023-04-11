import tw from 'tailwind-styled-components';

import { Link } from '@/components/core/link';

export const List = tw.ul`
  min-w-[130px]
  max-w-full
  list-none
  flex
  flex-col
  gap-12
  mobile-md:min-w-[164px]
  tablet-sm:min-w-[172px]
`;

export const MetaList = tw(List)`
  flex-row
  mt-12
  w-full
  tablet-sm:w-[unset]
  tablet-sm:flex-col
  tablet-sm:mt-0
`;

export const FooterLink = tw(Link)`
  h-full
  inline-flex
  items-center
  self-start
  text-tertiary-txt
  group/link
`;

export const FooterLinkSpan = tw.span`
  bg-gradient-to-r
  from-tertiary-txt
  to-tertiary-txt
  text-transparent
  bg-clip-text
`;
