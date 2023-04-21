import Icon from '@mdi/react';
import tw from 'tailwind-styled-components';

import { Img } from '@/components/core/img';
import { Link } from '@/components/core/link';

export const InstaPhotoContainer = tw(Link)`
  block
  aspect-square
  relative
  rounded-10
  group/insta
  overflow-hidden
  border
  border-transparent
  tablet-sm:col-span-3
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
  hocus:border-accent-dark/[0.56]
  hocus:shadow-sm
  hocus:after:opacity-50
`;

export const StyledPhoto = tw(Img)`
  transition
  h-full
  w-full
  group-hocus/insta:transform
  group-hocus/insta:scale-105
`;

export const InstaIcon = tw(Icon)`
  text-primary-txt
  fill-primary-txt
  absolute
  top-1/2
  left-1/2
  z-[2]
  transform
  -translate-x-1/2
  -translate-y-1/2
  opacity-0
  group-hocus/insta:opacity-100
`;
