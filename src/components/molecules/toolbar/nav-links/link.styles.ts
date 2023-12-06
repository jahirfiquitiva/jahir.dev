import tw from 'tailwind-styled-components';

import { Link } from '@/components/core/link/link';

export const ToolbarLink = tw(Link)`
  no-underline
  h-full
  w-full
  inline-flex
  items-center
  justify-start
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
  tablet-sm:w-auto
  [&[aria-current="page"]]:tablet-sm:bg-accent-dark/[0.1]
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
  self-start
  p-[calc(var(--floatingMargin,0)/var(--spaceDivider,1))_calc(var(--floatingMargin,0)/1.2)]

  group-hocus/link:bg-gradient-to-r
  group-hocus/link:bg-clip-text
  group-hocus/link:text-transparent
  group-hocus/link:saturate-125
  dark:group-hocus/link:saturate-150

  [[aria-current="page"]_&]:bg-gradient-to-r
  [[aria-current="page"]_&]:bg-clip-text
  [[aria-current="page"]_&]:text-transparent
  [[aria-current="page"]_&]:saturate-125
  dark:[[aria-current="page"]_&]:saturate-150

  scale-y-0
  tablet-sm:scale-y-100
  tablet-sm:self-center
  [[data-expanded="true"]_&]:scale-y-100
`;

export const HomeLinkSpan = tw(LinkSpan)`
  p-0
  text-transparent
  bg-gradient-to-r
  from-gradient-brand
  to-gradient-blue
  bg-clip-text
  saturate-125
  dark:saturate-150
`;

export const HomeLink = tw(ToolbarLink)`
  self-start
  p-[calc(var(--floatingMargin,0)/var(--spaceDivider,1))_var(--floatingMargin,0)]
  gap-[var(--floatingMargin,0)]
  tablet-sm:self-center
  tablet-sm:px-[calc(var(--floatingMargin,0)/1.3333)]
  [[data-expanded="true"]_&]:tablet-sm:self-center
  [[data-expanded="true"]_&]:tablet-sm:px-[calc(var(--floatingMargin,0)/1.3333)]
`;
