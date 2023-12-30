import { Img, type ImgProps } from '@/components/img';
import { Link } from '@/components/link';
import { tw } from '@/utils/cx';

export const ActivityCard = tw(Link)`
  block
  relative
  w-full
  h-auto
  max-h-[7rem]
  max-w-full
  rounded-2.5
  no-underline
  transition
  truncate
  border
  border-divider
  min-h-[6.125rem]
  mobile-lg:max-h-[6.125rem]
  tablet-sm:min-h-[6.5rem]
  tablet-sm:max-h-[unset]
  hocus:shadow-sm
  group/track
`;

export const BackgroundImage = tw(Img)<ImgProps>`
  absolute
  w-[110%]
  -left-[5%]
  -top-[100%]
  mobile-md:-top-[125%]
  -z-[1]
  rounded-2.5
  opacity-50
  saturate-125
  pointer-events-none
  select-none
  max-w-[unset]
  truncate
  ![animation-duration:15s]
`;

export const Content = tw.div`
  h-full
  w-full
  flex
  flex-row
  gap-3.5
  p-3
  max-w-full
  truncate
  rounded-2.5
  mobile-md:max-h-[7rem]
  items-center
  bg-white/65
  dark:bg-brand-800/35
`;

export const Texts = tw.div`
  flex
  flex-col
  flex-1
  gap-1.5
  truncate
  mix-blend-hard-light
`;

export const Header = tw.p`
  flex
  items-center
  gap-3
  text-3xs
  font-bold
  font-manrope
  tracking-wider
  text-tertiary-txt
  uppercase
`;

export const MusicBarsGroup = tw.span`
  relative
  flex
  justify-between
  w-3
  h-3
`;

export const MusicBar = tw.span`
  w-[0.1875rem]
  h-full
  bg-accent-dark
  rounded-[0.1875rem]
  content-['']
  animate-music-bars
  [transform-origin:bottom]
`;

export const TrackName = tw.span`
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
