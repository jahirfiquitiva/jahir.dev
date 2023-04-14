import tw from 'tailwind-styled-components';

import { Img } from '@/components/core/img';
import { Link } from '@/components/core/link';

export const BlogCard = tw(Link)`
  flex
  flex-col
  p-10
  -mx-10
  gap-12
  rounded-10
  text-secondary-txt
  transition-all
  overflow-hidden
  outline-offset-0
  transform
  group/post
  tablet-sm:p-12
  tablet-sm:-mx-12
  tablet-sm:flex-row
  tablet-lg:p-16
  tablet-lg:-mx-16
  tablet-lg:gap-16
  hocus:-translate-y-1
  hocus:bg-[rgba(var(--post-color)/0.06)]
  hocus:no-underline
  hocus:text-primary-txt
  dark:hocus:bg-[rgba(var(--post-color)/0.12)]
`;

export const BlogCardHero = tw(Img)`
  aspect-[2/1]
  h-auto
  rounded-4
  tablet-sm:mt-4
  tablet-sm:min-h-full
  tablet-sm:aspect-[5/3]
  tablet-sm:max-w-[160px]
`;

export const BlogTitle = tw.p`
  text-xs
  text-primary-txt
  group-hocus/post:underline
  group-hocus/post:text-[rgba(var(--post-text-color))]
`;

export const BlogDescription = tw.p`
  text-2xs
  text-secondary-txt
`;
