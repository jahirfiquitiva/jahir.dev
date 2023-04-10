import { Logo } from '@/components/icons';
import tw from '@/tw';

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
  group-hover/animoji:invisible
  group-hover/animoji:opacity-0
  group-hover/animoji:transform
  group-hover/animoji:scale-0
`;

export const StyledImg = tw(Img)`
  invisible
  opacity-0
  transform
  -rotate-[1deg]
  scale-0
  select-none
  pointer-events-none
  
  group-hover/animoji:visible
  group-hover/animoji:opacity-100
  group-hover/animoji:transform
  group-hover/animoji:-rotate-[8deg]
  group-hover/animoji:scale-[1.66]
`;
