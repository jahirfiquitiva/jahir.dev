import tw from 'tailwind-styled-components';

import { FooterLink, FooterLinkSpan } from './links-list/links-list.styles';

export const StyledFooter = tw.footer`
  w-full
  max-w-[666px]
  mx-auto
  grid
  grid-cols-3
  py-[var(--verticalContentPadding)]
  px-14
  gap-x-[calc(var(--verticalContentPadding)/2)]
  gap-y-[var(--verticalContentPadding)]
  border-t
  border-divider
  tablet-sm:px-16
  tablet-md:px-0
  tablet-sm:[grid-template-columns:repeat(2,minmax(0,auto))]
  tablet-sm:gap-y-[calc(var(--verticalContentPadding)/1.5)]
`;

export const LinksGroup = tw.div`
  flex flex-col
  gap-12
  w-full
  tablet-sm:gap-0
`;

export const LinksGroupTitle = tw.p`
  text-3xs text-tertiary-txt
  font-manrope font-bold
  select-none
  uppercase tracking-wider
  tablet-sm:sr-only
`;

export const BrandLink = tw(FooterLink)`
  inline-flex
  self-center
  py-3
  px-4
  gap-6
  min-h-[34px]
  !h-[unset]
  font-bold
  no-underline
  -ml-6
`;

export const BrandLinkSpan = tw(FooterLinkSpan)`
  text-xs
  from-gradient-brand
  to-gradient-blue
  saturate-125
  dark:saturate-150
  group-hocus/link:underline
  group-hocus/link:decoration-2
  group-hocus/link:decoration-gradient-brand
`;
