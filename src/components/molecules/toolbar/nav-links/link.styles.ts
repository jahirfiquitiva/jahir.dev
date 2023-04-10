import { Link } from '@/components/core/link';
import tw from '@/tw';

export const ToolbarLink = tw(Link)`
  no-underline
  hover:no-underline
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
  mobile-md:text-xs
  [&>span]:text-[inherit]
  [&>span]:h-full
  [&>span]:inline-flex
  [&>span]:items-center
  [&>span]:align-middle
  [&>span]:p-[calc(var(--floatingMargin,0)/var(--spaceDivider,1))_var(--floatingMargin,0)]
  [&>span]:transform
  [&[aria-current="page"]]:bg-accent-dark/[0.1]
  hover:bg-accent-dark/[0.1]
`;

export const PageLink = tw(ToolbarLink)`
  [&>span]:scale-y-0
  tablet-md:[&>span]:scale-y-100
  [[data-expanded="true"]_&]:[&>span]:scale-y-100
`;

export const HomeLink = tw(ToolbarLink)`
  self-start
  p-[calc(var(--floatingMargin,0)/var(--spaceDivider,1))_var(--floatingMargin,0)]
  gap-[calc(var(--floatingMargin,0)/var(--spaceDivider,1))]
  [&_span]:p-0
  [&_span]:text-transparent
  [&_span]:bg-gradient-to-r
  [&_span]:from-gradient-brand
  [&_span]:to-gradient-blue
  [&_span]:bg-clip-text
  tablet-md:self-center
  [[data-expanded="true"]_&]:tablet-md:self-center
`;
