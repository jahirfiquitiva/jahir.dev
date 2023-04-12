/* eslint-disable max-len */
import tw from 'tailwind-styled-components';

import { Img } from '@/components/core/img';
import { Link } from '@/components/core/link';

export const StyledProjectCard = tw(Link)`
  relative
  flex
  items-center
  p-12
  -ml-12
  gap-14
  rounded-10
  w-[calc(100%+1.5rem)]
  text-secondary-txt
  transition-all
  group/project
  no-underline
  hocus:no-underline
  hocus:text-primary-txt
`;

export const ProjectIcon = tw(Img)`
  transition-all
  bg-none
  filter
  saturate-[.95]
  opacity-[.85]
  p-6
  rounded-10
  drop-shadow-[0_1px_2px_rgba(var(--project-color)/0.5)]
  group-hocus/project:p-4
  group-hocus/project:saturate-100
  group-hocus/project:opacity-100
  group-hocus/project:bg-transparent
`;

export const TitleContainer = tw.div`
  flex
  flex-col
  flex-1
  text-xs
  text-primary-txt
  transition-all
`;

export const StarsContainer = tw.div`
  flex
  items-center
  text-3xs
  py-3
  px-8
  mr-8
  gap-3
  border
  border-solid
  border-divider
  rounded-full
  invisible
  opacity-0
  transform
  scale-0
  transition-all
  group-hocus/project:scale-100
  group-hocus/project:visible
  group-hocus/project:opacity-100
  group-hocus/project:border-[rgba(var(--project-color)/0.36)]
  group-hocus/project:dark:border-[rgba(var(--project-color)/0.48)]
`;

export const ProjectCardBackground = tw.div`
  z-0
  absolute
  top-12
  left-12
  bottom-12
  w-56
  h-56
  rounded-8
  bg-[rgba(var(--project-color)_/_0.048)]
  dark:bg-[rgba(var(--project-color)_/_0.072)]
  transition-all
  group-hocus/project:rounded-10
  group-hocus/project:top-0
  group-hocus/project:left-0
  group-hocus/project:bottom-0
  group-hocus/project:right-0
  group-hocus/project:w-full
  group-hocus/project:h-full
`;