import tw from 'tailwind-styled-components';

import { FooterLink, FooterLinkSpan } from './links-list/links-list.styles';

export const StyledFooter = tw.footer`
  w-full
  max-w-[666px]
  mx-auto
  grid
  grid-cols-2
  py-[var(--verticalContentPadding)]
  px-14
  gap-x-[calc(var(--verticalContentPadding)/2)]
  gap-y-[var(--verticalContentPadding)]
  border-t
  border-divider
  tablet-sm:px-16
  tablet-md:px-0
  tablet-sm:gap-x-40
`;

export const InnerFooter = tw.div`
  flex
  flex-wrap
  gap-16
  -mx-2
  items-center
  col-span-2
  mobile-lg:justify-between
`;

export const BrandLink = tw(FooterLink)`
  inline-flex
  self-start
  p-4
  pl-0
  gap-6
  min-h-[30]
  !h-[unset]
  font-bold
`;

export const BrandLinkSpan = tw(FooterLinkSpan)`
  from-gradient-brand
  to-gradient-blue
  saturate-125
  dark:saturate-150
`;

export const LinksGroupTitle = tw.summary`
  font-manrope font-bold text-primary-txt
  -py-2 mb-8 cursor-pointer select-none
  [&::marker]:content-['']
  [details[open]_&::marker]:content-['']
  after:content-['→'] after:ml-6
  [details[open]_&::after]:content-['←']
`;
