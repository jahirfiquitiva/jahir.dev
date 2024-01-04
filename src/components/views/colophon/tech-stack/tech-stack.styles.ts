import { Link } from '@/components/atoms/link';
import { tw } from '@/utils/cx';

export const StackContainer = tw.ul`
  relative
  overflow-hidden
  grid
  grid-cols-4
  grid-flow-dense
  py-12
  px-4
  gap-y-10
  items-center
  justify-center
  list-none
  [background-image:radial-gradient(var(--color-tertiary-txt)_1px,_transparent_1px)]
  [background-size:1rem_1rem]
  bg-repeat
  mobile-lg:[background-size:1.25rem_1.25rem]
  tablet-sm:[background-size:1.5rem_1.5rem]
`;

export const IconContainer = tw.li`
  flex
  flex-row
  m-auto
  items-center
  justify-center
  bg-background
  rounded-half
  p-1
  z-[1]
  max-w-[3.5rem]
`;

export const IconLink = tw(Link)`
  text-secondary-txt
  transform
  transition
  hocus:text-primary-txt
  hocus:scale-110
`;
