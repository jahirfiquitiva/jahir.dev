/* eslint-disable max-len */
import tw from 'tailwind-styled-components';

import { Img } from '@/components/core/img';
import { Link } from '@/components/core/link';

export const MusicItem = tw.li`
  min-h-[1.75rem]
  h-full
  inline-flex
  items-center
  align-middle
  w-full
  max-w-full
  ml-[3.25rem]
  mobile-md:ml-64
  tablet-sm:ml-0
`;

export const MusicLink = tw(Link)`
  h-full
  w-full
  inline-flex
  items-center
  flex-1
  gap-6
  text-tertiary-txt
  text-2xs
  font-normal
  truncate
  hocus:text-secondary-txt
  hocus:no-underline
  max-w-[130px]
  mobile-md:max-w-[164px]
  tablet-sm:max-w-[206px]
  group/music
`;
// ↑ for max width...
// Use the same values as List min-w
// which is found at @/components/molecules/footer/links-list/links-list.styles.ts

export const RotatingImg = tw(Img)`
  rounded-half
  border
  border-accent-dark/[0.12]
  motion-safe:animate-spin
  motion-safe:[animation-duration:8s]
  group-hocus/music:motion-safe:[animation-play-state:paused]
`;

export const ScrollingContainer = tw.div<{ $playing: boolean }>`
  flex
  flex-1
  max-w-full
  gap-24
  overflow-x-hidden
  ${(p) =>
    p.$playing
      ? '[mask-image:linear-gradient(90deg,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_25%,rgba(0,0,0,1)_75%,rgba(0,0,0,0)_100%)]'
      : '[mask-image:none]'}
  [mask-repeat:no-repeat]
  [mask-position:center]
`;

export const ScrollingText = tw.span<{ $playing: boolean }>`
  ${(p) => (p.$playing ? '' : 'truncate')}
  ${(p) =>
    p.$playing ? 'motion-safe:animate-scroll' : 'motion-safe:animate-none'}  
  motion-safe:[animation-play-state:running]
  group-hocus/music:underline
  group-hocus/music:motion-safe:[animation-play-state:paused]
`;

export const PseudoScrollingText = tw(ScrollingText)`
  ${(p) => (p.$playing ? '' : 'hidden invisible')}
  pointer-events-none
  select-none
`;
