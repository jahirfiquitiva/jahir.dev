import { tw } from '@/utils/cx';
import Icon from '@mdi/react';

import { Link } from '@/components/core/link/link';

export const StyledStatCard = tw(Link)`
  [--stat-color:var(--color-accent-dark)]
  border
  border-divider
  relative
  flex
  flex-row
  items-end
  w-full
  p-12
  gap-8
  text-secondary-txt
  bg-[rgba(var(--color-inverse)/0.006)]
  dark:bg-[rgba(var(--color-inverse)/0.008)]
  no-underline
  rounded-8
  transition
  overflow-hidden
  group/stat
  mobile-md:flex-col
  mobile-md:items-start
  tablet-sm:p-14
  tablet-sm:aspect-video
  hocus:no-underline
  hocus:transform
  hocus:-translate-y-1
  hocus:bg-[rgba(var(--stat-color)/0.032)]
  hocus:dark:bg-[rgba(var(--stat-color)/0.048)]
  hocus:border-[rgba(var(--stat-color)/0.56)]
  hocus:text-primary-txt
  hocus:shadow-sm
  hocus:shadow-[rgba(var(--stat-color)/0.2)]
`;

export const Value = tw.span`
  text-lg
  font-bold
  font-manrope
  leading-tight
  text-primary-txt
  transition-colors
  mobile-md:text-xl
  mobile-md:mt-auto
`;

export const IconContainer = tw.span`
  inline-flex
  absolute
  top-8
  right-8
  w-[2.25rem]
  h-[2.25rem]
  p-2
  rounded-half
  justify-center
  items-center
  transition
  mobile-md:top-10
  mobile-md:right-10
  tablet-sm:top-12
  tablet-sm:right-12
  bg-[rgba(var(--stat-color)/0.12)]
`;

export const StyledIcon = tw(Icon)`
  text-[rgb(var(--stat-color))]
  fill-[rgb(var(--stat-color))]
  opacity-90
  group-hocus/stat:opacity-100
`;
