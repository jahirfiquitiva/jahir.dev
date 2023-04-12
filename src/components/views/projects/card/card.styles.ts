/* eslint-disable max-len */
import tw from 'tailwind-styled-components';

import { Chip } from '@/components/core/chip';
import { Img } from '@/components/core/img';
import { Link } from '@/components/core/link';

export const StyledProjectCard = tw(Link)`
  relative
  flex
  items-center
  gap-14
  rounded-10
  py-10
  px-8
  -ml-8
  w-[calc(100%+1rem)]
  tablet-md:p-12
  tablet-md:-ml-12
  tablet-md:w-[calc(100%+1.5rem)]
  text-secondary-txt
  transition-all
  group/project
  no-underline
  hocus:no-underline
  hocus:text-primary-txt
  hocus:bg-[rgba(var(--project-color)_/_0.056)]
  hocus:dark:bg-[rgba(var(--project-color)_/_0.12)]
`;

export const ProjectIcon = tw(Img)`
  transition-all
  bg-none
  filter
  p-6
  rounded-10
  bg-[rgba(var(--project-color)_/_0.056)]
  dark:bg-[rgba(var(--project-color)_/_0.12)]
  drop-shadow-[0_1px_2px_rgba(var(--project-color)/0.5)]
  group-hocus/project:p-4
  group-hocus/project:saturate-125
  group-hocus/project:opacity-100
  group-hocus/project:bg-transparent
  group-hocus/project:dark:bg-transparent
`;

export const TitleContainer = tw.div`
  flex
  flex-col
  flex-1
  gap-4
  text-xs
  text-primary-txt
  transition-all
`;

export const StarsCounter = tw(Chip)`
  py-1
  px-[0.3125rem]
  gap-4
  !rounded-6
  text-[0.75rem]
  font-manrope
  font-semibold
  transition-all
  border-transparent
  bg-[rgba(var(--project-color)/0.042)]
  dark:bg-[rgba(var(--project-color)/0.09)]
  hocus:transform-none
  group-hocus/project:text-primary-txt
  group-hocus/project:border
  group-hocus/project:border-[rgba(var(--project-text-color)/0.24)]
  group-hocus/project:dark:border-[rgba(var(--project-text-color)/0.48)]
  group-hocus/project:bg-transparent
  group-hocus/project:dark:bg-transparent
`;
