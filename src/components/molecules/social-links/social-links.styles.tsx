import tw from 'tailwind-styled-components';

import { Link } from '@/components/core/link/link';

export const SocialLinksContainer = tw.ul`
  list-none
  flex
  flex-1
  items-center
  gap-6
  -mx-4
  w-full
  not-prose
  mobile-lg:-mx-6
  mobile-lg:flex-[unset]
  mobile-lg:w-[unset]
  tablet-sm:-mr-2
`;

export const SocialLinkItem = tw.li`
  block
  h-[30px]
  w-[30px]
`;

export const SocialLink = tw(Link)`
  p-0
  inline-flex
  items-center
  justify-center
  h-full
  w-full
  rounded-6
  text-tertiary-txt
  hocus:bg-accent-dark/[0.1]
  hocus:text-secondary-txt
  hocus:no-underline
`;

export const GitHubLink = tw(SocialLink)`
  hocus:text-[#333]
  hocus:dark:text-[#ebebeb]
`;

export const LinkedInLink = tw(SocialLink)`
  hocus:text-[#0077b5]
  hocus:dark:text-[#1a85bc]
`;

export const TwitterLink = tw(SocialLink)`
  hocus:text-[#1881C2]
  hocus:dark:text-[#34aaf3]
`;

export const InstagramLink = tw(SocialLink)`
  hocus:text-[#d6249f]
  hocus:dark:text-[#da3aa9]
`;

export const BlueskyLink = tw(SocialLink)`
  hocus:text-[#0078e6]
  hocus:dark:text-[#0085ff]
`;
