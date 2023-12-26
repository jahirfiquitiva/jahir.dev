import { tw } from '@/utils/cx';

import { Img } from '@/components/core/img';
import { Link } from '@/components/core/link/link';

import { Stat } from '../../mdx/ui/stat';

export const PostCard = tw(Link)`
  flex
  flex-row
  p-10
  -mx-10
  gap-14
  rounded-10
  min-w-[calc(100%_+_1.25rem)]
  text-secondary-txt
  transition
  overflow-hidden
  transform
  group/post
  no-underline
  tablet-sm:p-12
  tablet-sm:-mx-12
  tablet-sm:min-w-[calc(100%_+_1.5rem)]
  hocus:-translate-y-1
  hocus:outline-offset-0
  hocus:bg-[rgba(var(--post-color)/0.07)]
  hocus:no-underline
  hocus:text-primary-txt
  dark:hocus:bg-[rgba(var(--post-color)/0.14)]
`;

const PostHero = tw(Img)`
  h-auto
  w-full
  rounded-4
  min-h-full
  transition
  border border-transparent -m-1
  group-hocus/post:border-[rgba(var(--post-text-color)/0.24)]
  group-hocus/post:dark:border-[rgba(var(--post-text-color)/0.36)]
`;

export const PostCardHero = tw(PostHero)`
  aspect-[3/4]
  max-w-[3.5rem]
  tablet-sm:aspect-[4/3]
  tablet-sm:max-w-[148px]
  tablet-sm:max-h-full
`;

export const SmallPostHero = tw(PostHero)`
  aspect-square
  max-w-[3.5rem]
  max-h-[3.5rem]
`;

export const PostCardContent = tw.div`
  flex flex-col
  gap-4 flex-1
  tablet-sm:self-center
  mr-10 tablet-sm:mr-12
`;

export const PostTitle = tw.p`
  text-xs
  font-semibold
  font-manrope
  text-primary-txt
  transition
  line-clamp-1
  -mt-4
  balance
  tablet-sm:line-clamp-2
  group-hocus/post:underline
  group-hocus/post:decoration-2
  group-hocus/post:text-[rgba(var(--post-text-color))]
`;

export const PostDescription = tw.p`
  font-normal
  text-3xs
  text-secondary-txt
  overflow-ellipsis
  line-clamp-1
  -mt-1
  tablet-sm:text-2xs
  tablet-sm:line-clamp-2
  group-hocus/post:text-primary-txt
`;

export const PostStatsContainer = tw.div`
  flex
  items-center
  gap-x-8
  gap-y-6
  mt-6
  text-tertiary-txt
  text-4xs
  flex-wrap
  max-w-full
  tablet-sm:gap-x-12
  group-hocus/post:text-secondary-txt
`;

export const PostStat = tw(Stat)`
  bg-[rgba(var(--post-text-color)/0.048)]
  dark:bg-[rgba(var(--post-text-color)/0.12)]
  border border-transparent
  group-hocus/post:border-[rgba(var(--post-text-color)/0.24)]
  group-hocus/post:dark:border-[rgba(var(--post-text-color)/0.36)]
  group-hocus/post:bg-[rgba(var(--post-text-color)/0.036)]
  group-hocus/post:dark:bg-[rgba(var(--post-text-color)/0.096)]
`;
