import { tw } from '@/utils/cx';

import { Img } from '@/components/core/img';
import { Link } from '@/components/core/link/link';

export const NowPlayingCard = tw(Link)`
  block
  relative
  w-full
  h-auto
  text-secondary-txt
  no-underline
  group/track
  transition-colors
  truncate
  max-h-[7rem]
  max-w-full
  rounded-8
  border
  border-divider
  min-h-[6.125rem]
  mobile-lg:max-h-[6.125rem]
  tablet-sm:min-h-[6.5rem]
  tablet-sm:max-h-[unset]
  hocus:no-underline
  hocus:transform
  hocus:-translate-y-1
  hocus:border-accent-dark/[0.56]
  hocus:shadow-sm
`;

export const NowPlayingContent = tw.div`
  h-full
  w-full
  flex
  flex-row
  gap-14
  p-12
  max-w-full
  truncate
  rounded-8
  mobile-md:max-h-[7rem]
  items-center
  backdrop-blur-xl
  backdrop-saturate-200
  bg-[rgba(255,255,255,0.65)]
  dark:bg-[rgba(9,17,34,0.35)]
`;

export const BackgroundImage = tw(Img)`
  absolute
  w-[110%]
  -left-[5%]
  -top-[100%]
  mobile-md:-top-[125%]
  -z-[1]
  opacity-50
  saturate-125
  pointer-events-none
  select-none
  rounded-8
  max-w-[unset]
  ![animation-duration:15s]
`;

export const NowPlayingTexts = tw.div`
  flex
  flex-col
  flex-1
  gap-6
  truncate
  mix-blend-hard-light
`;

export const NowPlayingHeader = tw.p`
  flex
  items-center
  gap-12
  text-4xs
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
  w-full
  min-h-[1.5rem]
  group-hocus/track:text-primary-txt
  group-hocus/track:underline
  group-hocus/track:decoration-2
`;

export const TrackArtist = tw.span`
  -mt-2
  text-3xs
  truncate
  text-secondary-txt
  transition-colors
  w-full
  min-h-[1.375rem]
  group-hocus/track:text-primary-txt
`;

export const AlbumImg = tw(Img)`
  block
  rounded-4
  aspect-square
  w-auto
  h-auto
  max-h-[72px]
  max-w-full
  border
  border-[rgba(9,17,34,0.12)]
  dark:border-[rgba(255,255,255,0.12)]
  tablet-sm:max-h-[78px]
`;

export const NowPlayingBarsGroup = tw.span`
  relative
  flex
  justify-between
  w-12
  h-12
`;

export const NowPlayingBar = tw.span`
  w-3
  h-full
  bg-accent-dark
  rounded-3
  content-['']
  animate-music-bars
  [transform-origin:bottom]
`;
