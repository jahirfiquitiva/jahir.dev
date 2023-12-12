import tw from 'tailwind-styled-components';

import { Link } from '@/components/core/link/link';

export const List = tw.ul`
  max-w-full
  list-none
  flex
  flex-col
  gap-8
`;

export const FooterLink = tw(Link)`
  h-full
  inline-flex
  items-center
  self-start
  text-2xs
  text-tertiary-txt
  font-manrope
  font-semibold
  group/link
`;

export const FooterLinkSpan = tw.span`
  bg-gradient-to-r
  from-tertiary-txt
  to-tertiary-txt
  text-transparent
  bg-clip-text
  group-hocus/link:saturate-125
  dark:group-hocus/link:saturate-150
`;
