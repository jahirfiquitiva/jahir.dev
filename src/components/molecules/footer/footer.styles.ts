import tw from '@/tw';

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
  border-solid
  border-divider
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
  mobile-md:min-w-[154px]
`;

export const BrandLinkSpan = tw(FooterLinkSpan)`
  from-gradient-brand
  to-gradient-blue
`;

export const LinksContainer = tw.div`
  flex
  flex-wrap
  gap-[calc(var(--verticalContentPadding)/2)]
  justify-between
  mobile-md:justify-[unset]
  tablet-sm:justify-between
`;
