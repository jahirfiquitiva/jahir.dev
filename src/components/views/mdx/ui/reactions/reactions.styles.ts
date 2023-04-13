import tw from 'tailwind-styled-components';

import { Button } from '@/components/core/button';

export const ReactionsGroup = tw.div`
  flex flex-wrap gap-6 mobile-lg:gap-10
`;

export const ReactionButton = tw(Button)<{ $reacted?: boolean }>`
  py-10 px-12
  rounded-full
  text-3xs
  text-secondary-txt
  shadow-none
  bg-transparent
  dark:bg-transparent
  gap-6
  leading-none
  mobile-lg:gap-10
  hocus:shadow-none
  hocus:transform-none
  hocus:bg-transparent
  hocus:text-primary-txt
  hocus:border-[rgba(var(--reaction-color)/0.45)]
  ${(p) =>
    p.$reacted ? 'border-[rgba(var(--reaction-color)/0.45)]' : 'border-divider'}
  ${(p) =>
    p.$reacted ? 'bg-[rgba(var(--reaction-color)/0.08)]' : 'bg-transparent'}
  ${(p) =>
    p.$reacted
      ? 'dark:bg-[rgba(var(--reaction-color)/0.12)]'
      : 'dark:bg-transparent'}
`;
