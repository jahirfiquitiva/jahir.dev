import { OutlinedButton } from '@/components/atoms/button';
import { Icon } from '@/components/atoms/icon';
import { tw } from '@/utils/cx';

export const StyledReactionButton = tw(OutlinedButton)`
  rounded-full px-4 py-2
  text-2xs
  group/reaction
  hocus:bg-tint-bg
  hocus:ring-tint-border
  after:rounded-full
`;

export const ReactionIcon = tw(Icon)`
  size-4 mobile-md:size-5
  transition-colors
  group-hocus/reaction:text-[rgb(var(--tint))]
`;
