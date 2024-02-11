import { tw } from '@/utils/cx';

export const Main = tw.main.attrs({ style: { maxWidth: 666 } })`
  flex
  flex-col
  flex-1
  z-0
  pt-28
  px-3
  pb-8
  gap-14
  w-full
  mx-auto
  tablet-md:pt-32
  tablet-md:px-0
  motion-safe:animate-fade-in
`;
