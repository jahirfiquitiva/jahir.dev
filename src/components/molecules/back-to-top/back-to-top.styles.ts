import { Button } from '@/components/atoms/button';
import { tw } from '@/utils/cx';

export const BackToTopButton = tw(Button)`
  rounded-full
  fixed
  z-2
  bottom-0
  right-0
  m-4
  p-3
  size-14
  gap-0
  justify-center
  transform
  uppercase
  tracking-wider
  text-3xs
  shadow
  hocus:shadow-md
  shadow-brand-600/25
  hocus:shadow-brand-600/35
  dark:shadow-brand-200/35
  dark:hocus:shadow-brand-200/45
  
  tablet-sm:m-6
  desktop:size-[unset]
  desktop:min-h-11
  desktop:m-8
  desktop:py-3.5
  desktop:px-5

  after:rounded-full

  translate-y-24
  opacity-0
  select-none
  pointer-events-none
  [&.shown]:translate-y-0
  [&.shown]:opacity-100
  [&.shown]:select-auto
  [&.shown]:pointer-events-auto
`;

export const BackToTopIcon = tw.svg`
  size-6
  block
  visible
  desktop:hidden
  desktop:invisible
`;

export const BackToTopText = tw.span`
  hidden
  invisible
  desktop:block
  desktop:visible
`;
