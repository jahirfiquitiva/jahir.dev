import tw from 'tailwind-styled-components';

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
  group-hocus/project:border-l-2
  group-hocus/project:border-b-2
  transition-all
  delay-[-50ms]
`;
