/* eslint-disable max-len */
import tw from 'tailwind-styled-components';

export const Header = tw.header`
  [--toolbarHeight:56px]
  [--floatingMargin:calc(var(--totalToolbarHeight)_-_var(--toolbarHeight))]
  [--baseActualHeight:calc(var(--toolbarHeight)+var(--floatingMargin))]
  h-[var(--baseActualHeight)]
  z-[2]
  fixed
  top-0
  left-[calc(50%+calc(calc(100vw-100%)/2))]
  transition-[height]
  duration-[0.25s]
  transform
  -translate-x-1/2
  pt-[var(--floatingMargin)]
  
  w-full
  max-w-[666px]
  tablet-sm:h-[calc(var(--baseActualHeight)_+_4px)]
  [&[data-expanded="true"]]:h-[calc(calc(var(--baseActualHeight)_*_2.0625)_-_calc(var(--floatingMargin)_*_1.75))]
  [&[data-expanded="true"]]:tablet-sm:h-[calc(var(--baseActualHeight)_+_4px)]

  before:z-[1]
  before:content-['']
  before:absolute
  before:block
  before:top-0
  before:h-[calc(var(--floatingMargin)_+_6px)]
  before:w-full
  before:left-1/2
  before:transform
  before:-translate-x-1/2
  before:bg-gradient-to-t
  before:from-background
  before:to-transparent
  before:backdrop-blur-md
  before:backdrop-saturate-150
  before:backdrop-grayscale
`;

export const Nav = tw.nav<{ $elevated?: boolean }>`
  [--spaceDivider:1.25]
  z-[3]
  relative
  grid
  items-start
  h-full
  bg-toolbar
  backdrop-blur-[10px]
  backdrop-saturate-150
  rounded-10
  border
  border-accent-dark/[0.12]
  ${(p) =>
    p.$elevated
      ? '[box-shadow:0_0_6px_1px_rgba(var(--color-accent-dark)/0.16)]'
      : ''}
  p-[calc(var(--floatingMargin)/var(--spaceDivider))]
  mx-[var(--floatingMargin)]
  transition
  duration-200
  gap-0
  grid-rows-1
  [grid-template-columns:auto_1fr]
  
  hover:border-accent-dark/[0.24]
  hover:[box-shadow:0_0_8px_2px_rgba(var(--color-accent-dark)/0.16)]
  
  tablet-sm:[--spaceDivider:1.5]
  tablet-sm:[grid-template-columns:auto_1fr_auto]
  tablet-sm:gap-[calc(var(--floatingMargin)/var(--spaceDivider))]

  tablet-md:mx-0

  [[data-expanded="true"]>&]:[grid-template-rows:1fr_minmax(0px,_1fr)]
  [[data-expanded="true"]>&]:[row-gap:calc(calc(var(--floatingMargin)/var(--spaceDivider))*1.5)]
  [[data-expanded="true"]>&]:tablet-sm:[grid-template-rows:minmax(0px,_1fr)]
`;
