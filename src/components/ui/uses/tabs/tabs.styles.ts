import { tw } from '@/utils/cx';

export const TabsList = tw.div`
  flex
  flex-row
  items-center
  p-0.5
  pb-0
  pr-14
  max-w-full
  overflow-y-hidden
  overflow-x-scroll
  [-webkit-overflow-scrolling:touch]
  border-b
  border-divider
  no-scrollbar
  tablet-md:pr-0
  tablet-md:overflow-x-hidden
  [mask-image:linear-gradient(to_right,rgba(0_0_0/1)_0%,rgba(0_0_0/1)_90%,rgba(0_0_0/0)_100%)]
  tablet-md:[mask-image:none]
`;

export const TabPanel = tw.section.attrs({
  role: 'tabpanel',
})`
  flex
  flex-col
  gap-6
  mb-4
  transition
  opacity-100
  visible
  [&[aria-hidden="true"]]:hidden
  [&[aria-hidden="true"]]:opacity-0
  [&[aria-hidden="true"]]:invisible
  [&[aria-hidden="true"]]:pointer-events-none
  [&[aria-hidden="true"]]:select-none
`;

export const TabButton = tw.a`
  px-1.5 py-1
  font-manrope
  font-semibold
  min-w-fit
  text-center
  text-3xs
  text-secondary-txt
  group/tab
  no-underline
  mobile-lg:text-2xs
  hocus:outline-offset-0
  [&[aria-selected="true"]]:text-accent
`;

export const TabButtonText = tw.span`
  relative
  block
  min-w-9
  w-full
  px-2 py-1
  rounded-1.5
  transition
  tracking-wide
  group-hover/tab:bg-brand-500/10
  group-hover/tab:dark:bg-brand-100/15
  after:absolute
  after:-bottom-1
  after:left-1.5
  after:right-1.5
  after:h-[0.1875rem]
  after:rounded-t-[0.1875rem]
  after:transition-colors
  after:bg-transparent
  [[aria-selected="true"]>&]:after:bg-accent
`;
