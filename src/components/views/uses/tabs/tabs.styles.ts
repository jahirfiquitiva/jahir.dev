import tw from 'tailwind-styled-components';

import { NoPaddingSection } from '@/components/core/section';

export const TabsList = tw.div`
  flex
  flex-row
  items-center
  p-2
  pb-0
  pr-56
  max-w-full
  overflow-y-hidden
  overflow-x-scroll
  [-webkit-overflow-scrolling:touch]
  border-b
  border-divider
  tablet-md:pr-0
  tablet-md:overflow-x-hidden
  [&::-webkit-scrollbar]:hidden
  [&::-webkit-scrollbar]:[scrollbar-width:var(--size-scrollbar-width)]
  [mask-image:linear-gradient(to_right,rgba(0_0_0/1)_0%,rgba(0_0_0/1)_90%,rgba(0_0_0/0)_100%)]
  tablet-md:[mask-image:none]
`;

export const TabPanel = tw(NoPaddingSection)`
  gap-24
  mb-16
  transition
  ${(p) => (p.hidden ? 'hidden' : 'flex')}
  ${(p) => (p.hidden ? 'invisible' : 'visible')}
  ${(p) => (p.hidden ? 'opacity-0' : 'opacity-100')}
  ${(p) => (p.hidden ? 'pointer-events-none' : 'pointer-events-auto')}
  ${(p) => (p.hidden ? 'select-none' : 'select-auto')}
`;

export const TabButton = tw.a`
  px-6 py-4
  font-manrope
  font-semibold
  min-w-fit
  text-3xs
  text-secondary-txt
  group/tab
  no-underline
  hocus:outline-offset-0
  mobile-lg:text-2xs
  [&[aria-selected="true"]]:pt-6
  [&[aria-selected="true"]]:pb-4
  [&[aria-selected="true"]]:border-b-2
  [&[aria-selected="true"]]:text-accent
  [&[aria-selected="true"]]:border-accent
`;

export const TabButtonText = tw.span`
  block
  w-full
  px-8 py-4
  rounded-4
  transition
  tracking-wide
  group-hover/tab:bg-accent-dark/[0.08]
  group-hover/tab:dark:bg-accent-dark/[0.16]
`;
