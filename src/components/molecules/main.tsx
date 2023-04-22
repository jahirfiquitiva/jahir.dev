import tw from 'tailwind-styled-components';

export const Main = tw.main`
  flex
  flex-col
  flex-1
  z-0
  pt-[calc(var(--totalToolbarHeight)_+_var(--verticalContentPadding)_+_0.25rem)]
  pb-[var(--verticalContentPadding)]
  gap-64
  w-full
  max-w-[666px]
  mx-auto
  tablet-sm:pt-[calc(var(--totalToolbarHeight)_+_var(--verticalContentPadding)_+_0.75rem)]
  motion-safe:animate-page-transition
  motion-safe:[animation-delay:150ms]
`;
