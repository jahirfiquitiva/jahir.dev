import tw from 'tailwind-styled-components';

import { Img } from '@/components/core/img';
import { Link } from '@/components/core/link';

export const GridContainer = tw.div`
  rounded-16
  border-none
  overflow-hidden
  [box-shadow:0_0_4px_2px_var(--color-accent-dark)]
  [background-color:rgba(var(--color-inverse)/0.006)]
  dark:[background-color:rgba(var(--color-inverse)/0.012)]
  bg-cover
  bg-no-repeat
  bg-center
  bg-[url('/static/images/uses/wallpaper.png')]
  dark:bg-[url('/static/images/uses/wallpaper-dark.png')]
`;

export const SoftwareGrid = tw.ol`
  m-0
  grid
  grid-cols-[repeat(3,minmax(0,120px))]
  [box-shadow:0_0_4px_2px_var(--color-accent-dark)]
  rounded-10
  gap-x-20
  gap-y-16
  py-24 px-12
  items-center
  justify-center
  [background-color:rgba(235_240_251/0.06)]
  dark:[background-color:rgba(9_17_34/0.06)]
  list-none
  mobile-md:grid-cols-[repeat(3,minmax(0,108px))]
  mobile-lg:grid-cols-[repeat(4,minmax(0,108px))]
  tablet-sm:grid-cols-[repeat(5,minmax(0,108px))]
  tablet-sm:py-32
  tablet-sm:px-24
  tablet-lg:py-48
`;

export const SoftwareItem = tw(Link)`
  flex
  flex-col
  items-center
  gap-2
  pb-2
  rounded-8
  transition
  text-secondary-txt
  hocus:text-primary-txt
  outline-primary-txt
  hocus:-translate-y-1
  hocus:translate-x-0
  mobile-lg:gap-4
  mobile-lg:pb-4
`;

export const AppIcon = tw(Img)`
  border-none
  filter
  drop-shadow-[0_0_4px_var(--color-img-drop-shadow)]
  max-w-[3rem]
  mobile-md:max-w-[3.5rem]
  mobile-lg:max-w-[4rem]
  tablet-sm:max-w-[4.5rem]
`;

export const AppName = tw.span`
  text-[#fff]
  text-3xs
  truncate
  max-w-[calc(100%-0.25rem)]
  [text-shadow:0_0_2px_rgba(9_17_34/0.72)]
`;
