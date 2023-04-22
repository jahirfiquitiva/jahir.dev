import tw from 'tailwind-styled-components';

import { Img } from '@/components/core/img';
import { Section } from '@/components/core/section';

export const IntroSection = tw(Section)`
  grid
  grid-cols-1
  gap-y-16
  tablet-sm:grid-cols-[minmax(0,1fr)_auto]
  tablet-sm:grid-rows-1
  tablet-sm:gap-x-28
`;

export const TextsContainer = tw.div`
  flex
  flex-col
  gap-8
  [grid-row:2]
  tablet-sm:[grid-row:1]
`;

export const IntroParagraph = tw.p`
  my-12
  max-w-[325px]
  mobile-lg:max-w-[410px]
`;

export const PhotoContainer = tw.div`
  rounded-half
  bg-[#38518d]
  w-[168px]
  h-[168px]
`;

export const Photo = tw(Img)`
  rounded-half
  [@media(hover:hover)]:filter
  [@media(hover:hover)]:grayscale
  [@media(hover:hover)]:contrast-75
  [@media(hover:hover)]:brightness-150
  [@media(hover:hover)]:transition
  [@media(hover:hover)]:[transition-duration:.25s]
  [@media(hover:hover)]:mix-blend-hard-light
  [@media(hover:hover)]:opacity-75
  hocus:filter-none
  hocus:mix-blend-normal
  hocus:opacity-100
`;
