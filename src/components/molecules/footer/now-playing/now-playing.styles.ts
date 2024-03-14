/* eslint-disable max-len */
import { Img } from '@/components/atoms/img';
import { Link } from '@/components/atoms/link';
import { tw } from '@/utils/cx';

export const NowPlayingLink = tw(Link)`
  font-normal
  flex flex-row items-center gap-2
  text-tertiary-txt text-3xs truncate
  no-underline group/music
  hocus:text-secondary-txt
  motion-safe:animate-fade-in
`;

export const NowPlayingAlbumCover = tw(Img)`
  size-6 rounded-full
  border border-divider
  motion-safe:animate-spin
  motion-safe:[animation-duration:8s]
  group-hocus/music:[animation-play-state:paused]
`;

export const NowPlayingTextsContainer = tw.div`
  flex items-center flex-1
  gap-6 overflow-x-hidden max-w-full
  [mask-repeat:no-repeat]
  [mask-position:center]
  [mask-image:linear-gradient(90deg,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_20%,rgba(0,0,0,1)_80%,rgba(0,0,0,0)_100%)]
`;

export const ScrollingText = tw.span`
  motion-safe:animate-scroll
  motion-safe:[animation-play-state:running]
  group-hocus/music:underline
  group-hocus/music:[animation-play-state:paused]
`;
