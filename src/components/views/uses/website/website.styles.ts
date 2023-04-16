/* eslint-disable max-len */
import tw from 'tailwind-styled-components';

import { Link } from '@/components/core/link';

export const DotsContainer = tw.ul`
  overflow-hidden
  grid
  grid-cols-3
  py-32
  px-16
  gap-y-32
  items-center
  justify-center
  [background-image:radial-gradient(var(--color-tertiary-txt)_1px,_transparent_1px)]
  [background-size:20px_20px]
  backdrop-opacity-50
  bg-repeat
  list-none
  tablet-sm:[background-size:24px_24px]
`;

export const IconContainer = tw.li`
  flex
  flex-row
  m-auto
  items-center
  justify-center
  bg-background
  rounded-half
  p-4
  max-w-[3.5rem]
`;

export const IconLink = tw(Link)`
  text-secondary-txt
  hocus:text-primary-txt
`;
