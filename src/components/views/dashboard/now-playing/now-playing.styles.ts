import tw from 'tailwind-styled-components';

import { Img } from '@/components/core/img';
import { Link } from '@/components/core/link';

export const NowPlayingCard = tw(Link)`
  relative
  !w-full
  h-full
  text-secondary-txt
  no-underline
  group/track
  transition-colors
  truncate
  max-h-[7rem]
  col-span-2
  aspect-video
  rounded-t-8
  tablet-sm:col-span-6
  hocus:no-underline
  hocus:transform
  hocus:border-accent-dark/[0.56]
  hocus:shadow-sm
`;

export const NowPlayingContent = tw.div`
  h-full
  w-full
  flex
  flex-row
  gap-16
  p-12
  max-w-full
  truncate
  mobile-md:max-h-[7rem]
  items-center
  backdrop-blur-xl
  backdrop-saturate-200
  bg-[rgba(255,255,255,0.6)]
  dark:bg-[rgba(9,17,34,0.3)]
`;

export const BackgroundImage = tw(Img)`
  absolute
  top-1/2
  left-0
  right-0
  w-full
  z-0
  opacity-50
  saturate-125
  pointer-events-none
  select-none
  transform
  -translate-y-1/2
`;

export const NowPlayingTexts = tw.div`
  flex
  flex-col
  gap-4
  truncate
  mix-blend-hard-light
`;

export const NowPlayingHeader = tw.span`
  text-[0.75rem]
  font-bold
  font-manrope
  tracking-wider
  text-tertiary-txt
  uppercase
`;

export const TrackName = tw.p`
  text-2xs
  truncate
  font-bold
  font-manrope
  text-secondary-txt
  transition-colors
  max-w-full
  group-hocus/track:text-primary-txt
  group-hocus/track:underline
  group-hocus/track:decoration-wavy
`;

export const TrackArtist = tw.span`
  -mt-2
  text-3xs
  truncate
  text-secondary-txt
  transition-colors
  max-w-full
  group-hocus/track:text-primary-txt
`;

export const AlbumImg = tw(Img)`
  block
  rounded-6
  aspect-square
  w-auto
  h-auto
  max-h-full
  max-w-full
  border
  border-[rgba(9,17,34,0.12)]
  dark:border-[rgba(255,255,255,0.12)]
`;
