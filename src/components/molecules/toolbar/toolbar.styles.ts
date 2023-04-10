import tw from '@/tw';

export const Header = tw.header`
  [--toolbarHeight:56px]
  [--floatingMargin:calc(var(--totalToolbarHeight)_-_var(--toolbarHeight))]
  [--baseActualHeight:calc(var(--toolbarHeight)+var(--floatingMargin))]
  z-[2]
  fixed
  top-0
  left-1/2
  transform
  -translate-x-1/2
  pt-[var(--floatingMargin)]
  h-[var(--baseActualHeight)]
  w-full
  max-w-[666px]
  transition-all
  tablet-sm:h-[calc(--baseActualHeight_+_4px)]
  [&.expanded]:h-[calc(calc(--baseActualHeight_*_2)_-_calc(--floatingMargin_*_1.75))]
  [&.expanded]:tablet-sm:h-[calc(--baseActualHeight_+_4px)]
`;

export const Nav = tw.nav`
  [--spaceDivider:1.25]
  z-[3]
  relative
  grid
  items-center
  h-full
  bg-toolbar
  backdrop-blur-[10px]
  backdrop-saturate-150
  rounded-10
  border
  border-solid
  border-accent-dark/[0.12]
  [box-shadow:0_0_6px_1px_rgba(var(--color-accent-dark)/0.16)]
  p-[calc(var(--floatingMargin)/var(--spaceDivider))]
  mx-[var(--floatingMargin)]
  transition-shadow
  gap-0
  grid-rows-1
  [grid-template-columns:auto_1fr]
  
  hover:border-accent-dark/[0.24]
  hover:[box-shadow:0_0_8px_2px_rgba(var(--color-accent-dark)/0.16)]
  
  tablet-sm:[--spaceDivider:1.5]
  tablet-sm:[grid-template-columns:auto_1fr_auto]
  tablet-sm:gap-[calc(var(--floatingMargin)/var(--spaceDivider))]

  tablet-md:mx-0

  [&.expanded]:[grid-template-rows:1fr_minmax(0px,_1fr)]
  [&.expanded]:row-gap-[calc(var(--floatingMargin)/var(--spaceDivider))]
  [&.expanded]:tablet-sm:[grid-template-rows:minmax(0px,_1fr)]
`;
