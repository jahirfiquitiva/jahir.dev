import Icon from '@mdi/react';
import tw from 'tailwind-styled-components';

import { Img } from '@/components/core/img';
import { Link } from '@/components/core/link/link';

export const InstaPhotoContainer = tw(Link)`
  block
  aspect-square
  relative
  group/insta
  rounded-2
  overflow-hidden
  after:absolute
  after:[content:'']
  after:top-0
  after:left-0
  after:w-full
  after:h-full
  after:bg-background
  after:opacity-0
  after:transition
  after:pointer-events-none
  after:select-none
  hocus:transform
  hocus:-translate-y-1
  hocus:shadow-sm
  hocus:after:opacity-75
`;

export const StyledPhoto = tw(Img)`
  transition
  duration-300
  h-full
  w-full
  group-hocus/insta:transform
  group-hocus/insta:scale-105
  group-hocus/insta:opacity-90
`;

export const InstaVideo = tw.video`
  block
  object-cover
  object-center
  transition
  duration-300
  h-full
  w-full
  group-hocus/insta:transform
  group-hocus/insta:scale-105
  group-hocus/insta:opacity-90
`;

export const InstaIcon = tw(Icon)`
  text-primary-txt
  fill-primary-txt
  absolute
  right-16
  top-16
  z-[2]
  opacity-0
  group-hocus/insta:opacity-100
`;

const PostOverlayedText = tw.span`
  absolute
  bg-background
  rounded-4
  py-2
  px-0
  w-0
  max-w-0
  truncate
  text-2xs
  opacity-0
  transition-all
  duration-300
  -delay-[25]
  z-[1]
  invisible
  pointer-events-none
  select-none
  group-hocus/insta:visible
  group-hocus/insta:px-8
  group-hocus/insta:w-auto
  group-hocus/insta:max-w-[calc(100%-1.5rem)]
  group-hocus/insta:opacity-100
  group-hocus/insta:delay-75
`;

export const PostCaption = tw(PostOverlayedText)`
  left-12
  bottom-12
  text-primary-txt
`;

export const PostDate = tw(PostOverlayedText)`
  left-12
  bottom-12
  text-secondary-txt
`;
