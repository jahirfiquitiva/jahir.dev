import tw from 'tailwind-styled-components';

import { Chip } from '@/components/core/chip';
import { Link } from '@/components/core/link';

export const Container = tw(Link)`
  flex
  items-center
  justify-between
  gap-12
  pl-14
  pr-12
  py-12
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
  font-manrope
  font-semibold
  group-hocus/sponsor:underline
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
`;
