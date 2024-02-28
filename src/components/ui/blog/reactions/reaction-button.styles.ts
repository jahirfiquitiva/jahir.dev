import { OutlinedButton } from '@/components/atoms/button';
import { tw } from '@/utils/cx';

export const StyledReactionButton = tw(OutlinedButton)`
  rounded-full px-4 py-2
  text-2xs
  group/reaction
  hocus:bg-tint-bg
  hocus:ring-tint-border
  after:rounded-full
`;
