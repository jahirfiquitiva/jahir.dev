import { Link } from '@/components/link';
import { tw } from '@/utils/cx';

export const BlogPostLink = tw(Link)`
  group/post no-underline
  relative
  p-2.5 mobile-lg:p-3
  tablet-md:rounded-2.5
  -mx-2.5 mobile-lg:-mx-3
  w-[calc(100%_+_1.25rem)] mobile-lg:w-[calc(100%_+_1.5rem)]
  transition-transform
  transform
  hocus:-translate-y-1
  hocus:bg-[rgba(var(--post-color)/0.12)]
  hocus:dark:bg-[rgba(var(--post-color)/0.24)]
  grid
  grid-cols-[auto_1fr]
  gap-2
  place-items-stretch
  items-center
  mobile-lg:gap-x-3
  mobile-lg:gap-y-1
  mobile-lg:items-start
  tablet-md:gap-x-3.5
`;
