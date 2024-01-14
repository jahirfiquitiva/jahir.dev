/* eslint-disable max-len */
import type { ImgProps } from '@/components/atoms/client-img';
import { Img } from '@/components/atoms/img';
import { Link } from '@/components/atoms/link';
import { tw } from '@/utils/cx';

export const Grid = tw.div`
  grid
  gap-3
  grid-cols-1
  tablet-sm:gap-3.5
  tablet-sm:grid-cols-2
`;

export const HardwareItem = tw(Link)`
  font-normal
  flex
  flex-row
  items-center
  border
  border-divider
  rounded-2.5
  gap-1.5
  pl-0.5
  pr-1.5
  py-1.5
  min-h-[6rem]
  group/hardware
  text-secondary-txt
  bg-white/50
  dark:bg-brand-800/15
  overflow-hidden
  transition
  no-underline
  hocus:border-brand-600/35
  dark:hocus:border-brand-200/35
  hocus:shadow-sm
`;

export const HardwareImage = tw(Img)<ImgProps>`
  p-2
  select-none
  transition
  max-w-[4.5rem]
  shadow-brand-950/30
  drop-shadow-[0_1px_3px_var(--tw-shadow-color)]
  dark:shadow-brand-50/25
  dark:drop-shadow-[0_2px_5px_var(--tw-shadow-color)]
  mobile-md:max-w-[5rem]
  mobile-lg:max-w-[5.5rem]
  scale-95
  group-hocus/hardware:scale-100
`;

export const TextsContainer = tw.div`
  flex flex-col w-full
  py-0.5 gap-0.5
`;

export const HardwareName = tw.p`
  font-medium
  text-primary-txt
  text-2xs
  m-0
  transition
  group-hocus/hardware:underline
  group-hocus/hardware:text-accent-dark
`;

export const HardwareDescription = tw.span`
  transition
  text-secondary-txt
  text-3xs
  group-hocus/hardware:text-primary-txt
`;
