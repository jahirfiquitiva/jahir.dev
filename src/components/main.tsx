import { tw } from '@/utils/cx';

export const Main = tw.main`
  flex
  flex-col
  flex-1
  z-0
  pt-24
  px-2.5
  pb-7
  gap-16
  w-full
  max-w-site
  mx-auto
  mobile-lg:px-3
  mobile-lg:pb-8
  tablet-sm:pt-28
  tablet-sm:pb-9
  tablet-md:pt-32
  tablet-md:px-0
  tablet-md:gap-18
  motion-safe:animate-page-transition
  motion-safe:[animation-delay:100ms]
`;
