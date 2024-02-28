import { tw } from '@/utils/cx';

export const ThemeToggleContainer = tw.div`
  flex
  items-center
  justify-center
  min-h-11
  min-w-11
  size-11
  p-2
  rounded-1.5
  transition
  text-accent
  relative
  hocus:text-accent-dark
`;

export const ThemeSelect = tw.select`
  size-11
  rounded-1.5
  bg-transparent
  hocus:bg-toolbar-highlight
  appearance-none
  text-transparent
`;

export const ThemeIconContainer = tw.div`
  absolute
  top-0 left-0 right-0 bottom-0
  flex items-center justify-center
  pointer-events-none select-none
`;
