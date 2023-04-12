/* eslint-disable max-len */
import tw from 'tailwind-styled-components';

import { Img } from '@/components/core/img';
import { Link } from '@/components/core/link';

export const StyledProjectCard = tw(Link)`
  relative
  flex
  flex-col
  py-12
  px-14
  gap-10
  w-full
  bg-inverse/[0.006]
  border
  border-solid
  border-divider
  rounded-8
  text-secondary-txt
  transition-all
  dark:bg-inverse/[0.008]
  group/project
  no-underline
  hocus:no-underline
  hocus:text-primary-txt
  hocus:my-1
  hocus:py-[11px]
  hocus:px-[13px]
  hocus:transform
  hocus:scale-[1.0125]
  hocus:[box-shadow:0_0_8px_2px_rgba(var(--project-color)_/_0.2),_0_0_1px_1px_rgba(var(--project-color)_/_0.5)]
  hocus:bg-[rgba(var(--project-color)_/_0.035)]
  hocus:border-[rgba(var(--project-color)_/_0.5)]
`;

export const ProjectIcon = tw(Img)`
  transition-all
  bg-none
  filter
  saturate-[.95]
  opacity-[.85]
  drop-shadow-[0_1px_2px_rgba(var(--project-color)/0.5)]
  group-hocus/project:saturate-100
  group-hocus/project:opacity-100
`;

export const TitleContainer = tw.div`
  flex
  items-center
  -ml-2
  gap-12
  text-sm
  font-semibold
  font-manrope
  text-primary-txt
  transition-all
`;

export const StarsContainer = tw.div`
  flex
  items-center
  absolute
  top-0
  right-0
  text-3xs
  py-3
  px-6
  gap-3
  border-solid
  border-divider
  border-t-0
  border-r-0
  border-l
  border-b
  rounded-bl-8
  text-tertiary-txt
  group-hocus/project:border-l-2
  group-hocus/project:border-b-2
  group-hocus/project:text-secondary-txt
  group-hocus/project:border-[rgba(var(--project-color)_/_0.5)]
  transition-all
  delay-[-50ms]
`;
