import type { ImgProps } from '@/components/atoms/img';
import { Img } from '@/components/atoms/img';
import { Link } from '@/components/atoms/link';
import { tw } from '@/utils/cx';

export const GridContainer = tw.div`
  tablet-md:rounded-4
  -mx-3 tablet-md:-mx-4
  border-none
  overflow-hidden
  bg-cover
  bg-no-repeat
  bg-center
  bg-[url('/media/uses/wallpaper.jpg')]
  dark:bg-[url('/media/uses/wallpaper-dark.jpg')]
`;

export const SoftwareGrid = tw.ol`
  m-0
  grid
  grid-cols-[repeat(3,minmax(0,120px))]
  [box-shadow:0_0_4px_2px_var(--color-accent-dark)]
  gap-6
  py-6 px-3
  items-center
  justify-center
  bg-light/10
  dark:bg-light/5
  list-none
  mobile-md:grid-cols-[repeat(3,minmax(0,108px))]
  mobile-lg:grid-cols-[repeat(4,minmax(0,108px))]
  tablet-sm:grid-cols-[repeat(5,minmax(0,108px))]
  tablet-sm:py-8
  tablet-sm:px-6
  tablet-lg:py-12
`;

export const SoftwareItem = tw(Link)`
  flex
  flex-col
  items-center
  pb-1
  rounded-2
  transition
  text-black
  hocus:text-black
  hocus:decoration-black
  dark:text-white
  dark:hocus:text-white
  dark:hocus:decoration-white
  outline-primary-txt
  no-underline
  hocus:underline
  mobile-lg:gap-1
  mobile-lg:pb-1
  group/software
`;

export const AppIcon = tw(Img)<ImgProps>`
  transition
  border-none
  shadow-brand-950/30
  drop-shadow-[0_1px_3px_var(--tw-shadow-color)]
  dark:shadow-brand-50/25
  dark:drop-shadow-[0_2px_5px_var(--tw-shadow-color)]
  max-w-[3rem]
  mobile-md:max-w-[3.5rem]
  mobile-lg:max-w-[4rem]
  tablet-sm:max-w-[4.5rem]
  scale-95
  group-hocus/software:scale-100
`;

export const AppName = tw.span`
  text-inherit
  text-3xs
  truncate
  max-w-[calc(100%-0.25rem)]
  dark:[text-shadow:0_0_2px_rgba(9_17_34/0.72)]
`;
