/* eslint-disable max-len */
import tw from 'tailwind-styled-components';

import { Img } from '@/components/core/img';
import { Link } from '@/components/core/link';

export const MusicItem = tw.li`
  h-[1.75rem]
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
  w-full
  inline-flex
  items-center
  flex-1
  gap-6
  text-tertiary-txt
  text-2xs
  font-normal
  hocus:text-secondary-txt
  hocus:no-underline
`;

export const RotatingImg = tw(Img)`
  rounded-half
  border
  border-solid
  border-accent-dark/[0.12]
  motion-safe:animate-spin
  [animation-duration:10s]
`;

export const ScrollingContainer = tw.div`
  group/music
  flex
  flex-1
  max-w-full
  gap-16
  overflow-x-hidden
  [mask-image:linear-gradient(90deg,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_20%,rgba(0,0,0,1)_80%,rgba(0,0,0,0)_100%)]
  [mask-repeat:no-repeat]
  [mask-position:center]
`;

export const ScrollingText = tw.span`
  motion-safe:animate-scroll
  [animation-play-state:running]
  group-hocus/music:[animation-play-state:paused]
`;

export const PseudoScrollingText = tw(ScrollingText)`
  pointer-events-none
  select-none
`;
