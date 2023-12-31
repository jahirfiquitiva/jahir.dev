import { Img, type ImgProps } from '@/components/atoms/img';
import { Link } from '@/components/atoms/link';
import { tw } from '@/utils/cx';

export const ProjectLink = tw(Link)`
  group/project no-underline
  relative
  p-2.5 mobile-lg:p-3
  tablet-md:rounded-2.5
  -mx-3
  w-[calc(100%_+_1.5rem)]
  bg-transparent
  transition-colors
  hocus:bg-[rgba(var(--project-color)/0.1)]
  hocus:dark:bg-[rgba(var(--project-color)/0.2)]
  flex
  flex-row
  items-center
  gap-2
  place-items-stretch
  mobile-lg:gap-3
  mobile-lg:items-start
  tablet-md:gap-3.5
`;

export const ProjectIcon = tw(Img)<ImgProps>`
  rounded-2 p-1.5
  transition-all
  aspect-square object-contain
  bg-[rgba(var(--project-color)/0.07)]
  dark:bg-[rgba(var(--project-color)/0.14)]
  drop-shadow-none
  group-hocus/project:p-1
  group-hocus/project:saturate-125
  group-hocus/project:bg-transparent
  group-hocus/project:dark:bg-transparent
  group-hocus/project:drop-shadow-[0_1px_2px_rgba(var(--project-color)/0.5)]
`;
