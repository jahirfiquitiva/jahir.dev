import { OutlinedButton } from '@/components/atoms/button';
import { tw } from '@/utils/cx';

export const StyledReactionButton = tw(OutlinedButton)`
  rounded-full px-4 py-2
  text-2xs
  group/reaction
  hocus:bg-[rgba(var(--reaction-color)/0.08)]
  dark:hocus:bg-[rgba(var(--reaction-color)/0.2)]
  hocus:ring-[rgba(var(--reaction-color)/0.56)]
  [&[aria-pressed="true"]]:bg-[rgba(var(--reaction-color)/0.08)]
  dark:[&[aria-pressed="true"]]:bg-[rgba(var(--reaction-color)/0.16)]
  [&[aria-pressed="true"]]:ring-[rgba(var(--reaction-color)/0.56)]
  after:rounded-full
`;
