import tw from 'tailwind-styled-components';

import { FooterLink, FooterLinkSpan } from './links-list/links-list.styles';

export const StyledFooter = tw.footer`
  w-full
  max-w-[666px]
  mx-auto
  flex
  flex-col
  py-[var(--verticalContentPadding)]
  px-14
  gap-[var(--verticalContentPadding)]
  border-t
  border-divider
  tablet-sm:px-16
  tablet-md:px-0
`;

export const InnerFooter = tw.div`
  flex
  flex-wrap
  gap-16
  -mx-2
  tablet-sm:justify-between
`;

export const BrandLink = tw(FooterLink)`
  inline-flex
  self-start
  gap-6
  min-h-[30]
  !h-[unset]
  font-bold
  min-w-[140px]
  mobile-md:min-w-[164px]
  tablet-md:min-w-[210px]
`;

export const BrandLinkSpan = tw(FooterLinkSpan)`
  from-gradient-brand
  to-gradient-blue
  saturate-125
  dark:saturate-150
`;

export const LinksContainer = tw.div`
  flex
  flex-wrap
  gap-[calc(var(--verticalContentPadding)/2)]
  justify-between
  max-w-full
  mobile-md:justify-start
  tablet-sm:justify-between
  tablet-sm:flex-nowrap
  tablet-sm:grid
  tablet-sm:grid-cols-3
`;
