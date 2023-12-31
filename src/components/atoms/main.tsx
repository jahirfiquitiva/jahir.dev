import { tw } from '@/utils/cx';

export const Main = tw.main`
  flex
  flex-col
  flex-1
  z-0
  pt-28
  px-3
  pb-8
  gap-16
  w-full
  max-w-site
  mx-auto
  tablet-sm:pb-9
  tablet-md:pt-32
  tablet-md:px-0
  tablet-md:gap-18
  motion-safe:animate-page-transition
  motion-safe:[animation-delay:150ms]
`;
