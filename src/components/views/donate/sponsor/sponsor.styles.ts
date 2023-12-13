import tw from 'tailwind-styled-components';

import { Chip } from '@/components/core/chip/chip.styles';
import { Link } from '@/components/core/link/link';

export const Container = tw(Link)`
  flex
  items-center
  justify-between
  gap-10
  pl-10
  pr-8
  py-8
  rounded-0
  text-secondary-txt
  no-underline
  group/sponsor
  hocus:no-underline
  hocus:bg-accent-dark/[.08]
  hocus:text-primary-txt
`;

export const NameAndPhotoContainer = tw.div`
  flex
  items-center
  gap-10
  group-hocus/sponsor:underline
  group-hocus/sponsor:decoration-2
`;

export const Tier = tw(Chip)`
  gap-4
  text-3xs
  [color:inherit]
  py-4 px-8
  hocus:transform-none
`;

export const ListItem = tw.li`
  border-b border-divider
  first-of-type:rounded-t-8
  last-of-type:rounded-b-8
  last-of-type:border-b-0
  [&:first-of-type>a]:rounded-t-8
  [&:last-of-type>a]:rounded-b-8
`;
