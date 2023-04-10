import tw from 'tailwind-styled-components';

import { Logo } from '@/components/icons';

import { Img } from '../img';

export const Container = tw.span`
  block
  relative
  w-[1.5rem]
  h-[1.5rem]
  [&>*]:absolute
  [&>*]:top-1/2
  [&>*]:left-0
  [&>*]:transform
  [&>*]:-translate-y-1/2
  [&>*]:transition-all
`;

export const StyledLogo = tw(Logo)`
  fill-accent
  group-hocus/animoji:invisible
  group-hocus/animoji:opacity-0
  group-hocus/animoji:transform
  group-hocus/animoji:scale-0
`;

export const StyledImg = tw(Img)`
  invisible
  opacity-0
  transform
  -rotate-[1deg]
  scale-0
  select-none
  pointer-events-none
  
  group-hocus/animoji:visible
  group-hocus/animoji:opacity-100
  group-hocus/animoji:transform
  group-hocus/animoji:-rotate-[8deg]
  group-hocus/animoji:scale-[1.66]
`;
