import Icon from '@mdi/react';
import tw from 'tailwind-styled-components';

import { Link } from '@/components/core/link';

export const StyledStatCard = tw(Link)`
  [--stat-color:var(--color-accent-dark)]
  border
  border-divider
  relative
  flex
  flex-row
  items-end
  w-full
  py-14
  px-12
  gap-4
  text-secondary-txt
  bg-[rgba(var(--color-inverse)/0.006)]
  dark:bg-[rgba(var(--color-inverse)/0.008)]
  no-underline
  rounded-8
  transition
  overflow-hidden
  group/stat
  col-span-2
  mobile-md:flex-col
  mobile-md:items-start
  mobile-md:py-14
  mobile-md:px-16
  mobile-md:col-span-1
  tablet-sm:col-span-4
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
  top-10
  right-10
  w-[2.25rem]
  h-[2.25rem]
  p-2
  rounded-half
  justify-center
  items-center
  transition
  mobile-md:right-12
  bg-[rgba(var(--stat-color)/0.12)]
`;

export const StyledIcon = tw(Icon)`
  text-[rgb(var(--stat-color))]
  fill-[rgb(var(--stat-color))]
  opacity-90
  group-hocus/stat:opacity-100
`;
