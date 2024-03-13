/* eslint-disable max-len */
import { Link } from '@/components/atoms/link';
import { MAX_SITE_WIDTH } from '@/constants';
import { tw } from '@/utils/cx';

export const Nav = tw.nav.attrs({ style: { maxWidth: MAX_SITE_WIDTH } })`
  relative
  mx-auto
  h-full
  w-full
  z-4 bg-toolbar
  p-1.5 tablet-sm:p-2
  backdrop-saturate-125
  backdrop-blur-sm
  transform-gpu
  ring-1
  ring-inset
  ring-brand-600/10
  dark:ring-brand-200/15
  hover:ring-brand-600/20
  hover:dark:ring-brand-200/25
  rounded-3.5
  grid
  grid-cols-[auto_1fr]
  grid-rows-[auto_1fr]
  transition
  duration-200
  bg-[linear-gradient(to_bottom,_var(--color-background)_0%,_var(--color-background)_100%),_var(--color-toolbar)]
  shadow-none
  hover:shadow-toolbar-hover
  shadow-brand-600/15
  dark:shadow-brand-200/15
  tablet-sm:items-center
  tablet-sm:grid-cols-[auto_1fr_auto]
  tablet-sm:grid-rows-1
  tablet-sm:gap-2

  before:pointer-events-none
  before:select-none
  before:absolute
  before:top-0
  before:right-0
  before:bottom-0
  before:left-0
  before:rounded-[calc(0.875rem_-_0.0625rem)]
  before:m-px
  before:border-px
  before:border-accent-dark
  before:opacity-5
  dark:before:opacity-10
  before:[mask:linear-gradient(to_bottom,_rgba(0,_0,_0,_0)_0%,_rgba(0,_0,_0,_1)_100%)]
  dark:before:[mask:linear-gradient(to_bottom,_rgba(0,_0,_0,_1)_0%,_rgba(0,_0,_0,_0)_100%)]
`;

export const LinksList = tw.ol`
  h-full
  max-h-0
  opacity-0
  select-none
  pointer-events-none
  invisible
  flex flex-col
  justify-center
  gap-2
  px-0.5
  transition
  duration-200
  delay-150
  will-change-[max-height,opacity,visibility]
  tablet-sm:max-h-full
  tablet-sm:p-0
  tablet-sm:opacity-100
  tablet-sm:select-auto
  tablet-sm:pointer-events-auto
  tablet-sm:visible
  tablet-sm:flex-row
  tablet-sm:justify-end
  max-tablet-sm:col-span-2
`;

export const NavLink = tw(Link)`
  relative
  no-underline
  font-manrope font-bold
  min-h-11 min-w-11 h-full
  max-h-11
  px-2.5 py-1.5 rounded-1.5
  flex items-center
  transition-colors duration-200
`;

export const NavItem = tw.li`
  relative
  before:absolute
  before:top-0
  before:right-0
  before:bottom-0
  before:left-0
  before:rounded-1.5
  before:transition-colors
  before:duration-150
  before:bg-transparent
  hocus:before:bg-toolbar-highlight
`;

export const NavPageLink = tw(NavLink)`
  text-secondary-txt
  transition-colors
  hocus:saturate-125
  hocus:dark:saturate-150
`;

export const NavPageLinkText = tw.span`
  max-tablet-sm:ml-7
`;

export const ButtonsGroup = tw.ul`
  flex flex-row
  items-center
  justify-end
  gap-2
  [grid-row:1]
  [grid-column:2]
  tablet-sm:gap-0
  tablet-sm:justify-start
  tablet-sm:[grid-column:3/4]
`;

export const ExtraNavLinks = tw.li`
  min-h-11
  tablet-sm:hidden
  tablet-sm:invisible
  tablet-sm:select-none
  tablet-sm:pointer-events-none
`;
