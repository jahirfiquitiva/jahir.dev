import { Link } from '@/components/atoms/link';
import { tw } from '@/utils/cx';

export const Container = tw(Link)`
  font-normal
  flex
  items-center
  justify-between
  gap-2.5
  p-2
  rounded-0
  text-secondary-txt
  no-underline
  group/sponsor
  hocus:no-underline
  hocus:bg-brand-600/5
  dark:hocus:bg-brand-200/5
  hocus:text-primary-txt
`;

export const NameAndPhotoContainer = tw.div`
  flex
  items-center
  gap-2.5
  group-hocus/sponsor:underline
`;

export const Tier = tw.span`
  flex items-center gap-1
  rounded-2 pl-2 pr-2.5 py-1
  border
  text-3xs font-medium cursor-default
  transition-colors
  bg-tint-bg
  border-tint-border
  [color:inherit]
`;

export const ListItem = tw.li`
  border-b border-divider
  first-of-type:rounded-t-2
  last-of-type:rounded-b-2
  last-of-type:border-b-0
  [&:first-of-type>a]:rounded-t-2
  [&:last-of-type>a]:rounded-b-2
`;
