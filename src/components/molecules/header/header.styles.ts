import cx, { tw } from '@/utils/cx';

export const StyledHeader = tw.header`
  fixed top-0 h-full
  w-screen z-3
  left-0 right-0
  bg-gradient-to-b from-light to-light/10
  dark:from-dark dark:to-dark/10
  p-3
  bg-blend-hard-light
  backdrop-blur
  transform-gpu
  transition-[max-height]
  duration-300
  max-h-20 tablet-sm:max-h-21
`;

export const expandedClasses = cx(
  'tablet-sm:h-[unset]',
  'max-tablet-sm:max-h-full',
  'max-tablet-sm:to-light/50',
  'max-tablet-sm:dark:to-dark/50',
);
