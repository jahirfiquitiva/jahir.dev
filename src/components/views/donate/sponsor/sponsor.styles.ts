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
  rounded-2 pl-2 pr-2.5 min-h-9
  border border-divider
  text-3xs font-medium cursor-default
  transition-colors
  bg-brand-200/[0.06] dark:bg-brand-700/[0.12]
  hocus:bg-[rgba(var(--sponsor-color)/0.12)]
  dark:hocus:bg-[rgba(var(--sponsor-color)/0.24)]
  hocus:border-[rgba(var(--sponsor-color)/0.56)]
  [color:inherit]
  hocus:transform-none
`;

export const ListItem = tw.li`
  border-b border-divider
  first-of-type:rounded-t-2
  last-of-type:rounded-b-2
  last-of-type:border-b-0
  [&:first-of-type>a]:rounded-t-2
  [&:last-of-type>a]:rounded-b-2
`;
