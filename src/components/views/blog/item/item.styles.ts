import { Link } from '@/components/atoms/link';
import { tw } from '@/utils/cx';

export const BlogPostLink = tw(Link)`
  font-normal
  group/post no-underline
  relative
  p-2.5 mobile-lg:p-3
  tablet-md:rounded-2.5
  -mx-3
  w-[calc(100%_+_1.5rem)]
  bg-transparent
  transition-colors
  hocus:bg-[rgba(var(--post-color)/0.1)]
  hocus:dark:bg-[rgba(var(--post-color)/0.2)]
  grid
  grid-cols-[auto_1fr]
  gap-2
  place-items-stretch
  items-center
  mobile-lg:gap-x-3
  mobile-lg:gap-y-1
  mobile-lg:items-start
  tablet-md:gap-x-3.5
  tablet-md:gap-y-0.5
`;
