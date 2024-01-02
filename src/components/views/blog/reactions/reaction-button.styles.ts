import { tw } from '@/utils/cx';

export const StyledReactionButton = tw.button`
  flex items-center gap-2
  rounded-full px-4 py-2
  min-h-11 min-w-11
  border border-divider
  text-2xs cursor-default
  transition
  group/reaction
  bg-brand-200/[0.06] dark:bg-brand-700/[0.12]
  hocus:shadow
  hocus:bg-[rgba(var(--reaction-color)/0.08)]
  dark:hocus:bg-[rgba(var(--reaction-color)/0.16)]
  hocus:border-[rgba(var(--reaction-color)/0.56)]
  [&[aria-pressed="true"]]:bg-[rgba(var(--reaction-color)/0.08)]
  dark:[&[aria-pressed="true"]]:bg-[rgba(var(--reaction-color)/0.16)]
  [&[aria-pressed="true"]]:border-[rgba(var(--reaction-color)/0.56)]
`;
