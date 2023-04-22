import tw from 'tailwind-styled-components';

import { Img } from '@/components/core/img';
import { Link } from '@/components/core/link';

export const NowPlayingCard = tw(Link)`
  relative
  border
  border-divider
  !w-full
  h-full
  text-secondary-txt
  no-underline
  rounded-8
  group/track
  transition-colors
  truncate
  max-h-[154.5px]
  col-span-2
  aspect-video
  tablet-sm:col-span-6
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
  gap-16
  justify-between
  p-12
  max-w-full
  truncate
  mobile-md:max-h-[154.5px]
  tablet-sm:p-14
  items-center
  backdrop-blur-lg
  backdrop-saturate-200
  bg-[rgba(255,255,255,0.5)]
  dark:bg-[rgba(9,17,34,0.35)]
`;

export const BackgroundImage = tw(Img)`
  absolute
  top-0
  left-0
  right-0
  bottom-0
  w-full
  h-auto
  max-h-full
  z-0
  opacity-50
  pointer-events-none
  select-none
`;

export const NowPlayingTexts = tw.div`
  flex
  flex-col
  gap-12 tablet-sm:gap-16
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
  text-xs
  truncate
  font-bold
  font-manrope
  text-secondary-txt
  transition-colors
  max-w-full
  group-hocus/track:text-primary-txt
  group-hocus/track:underline
`;

export const TrackArtist = tw.span`
  text-2xs
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
