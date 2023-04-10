import tw from 'tailwind-styled-components';

import { Link } from '@/components/core/link';

export const ToolbarLink = tw(Link)`
  no-underline
  h-full
  inline-flex
  items-center
  justify-center
  align-middle
  font-manrope
  font-bold
  text-2xs
  text-secondary-txt
  rounded-6
  transition-colors
  min-h-[2.625rem]
  max-h-[2.625rem]
  hocus:no-underline
  hocus:bg-accent-dark/[0.1]
  mobile-md:text-xs
  [&[aria-current="page"]]:bg-accent-dark/[0.1]
`;

const LinkSpan = tw.span`
  text-[inherit]
  h-full
  inline-flex
  items-center
  align-middle
  transform
`;

export const PageLinkSpan = tw(LinkSpan)`
  p-[calc(var(--floatingMargin,0)/var(--spaceDivider,1))_var(--floatingMargin,0)]

  group-hocus/link:bg-gradient-to-r
  group-hocus/link:bg-clip-text
  group-hocus/link:text-transparent

  scale-y-0
  tablet-md:scale-y-100
  [[data-expanded="true"]_&]:scale-y-100
`;

export const HomeLinkSpan = tw(LinkSpan)`
  p-0
  text-transparent
  bg-gradient-to-r
  from-gradient-brand
  to-gradient-blue
  bg-clip-text
`;

export const HomeLink = tw(ToolbarLink)`
  self-start
  p-[calc(var(--floatingMargin,0)/var(--spaceDivider,1))_var(--floatingMargin,0)]
  gap-[calc(var(--floatingMargin,0)/var(--spaceDivider,1))]
  tablet-sm:self-center
  [[data-expanded="true"]_&]:tablet-sm:self-center
`;
