import Icon from '@mdi/react';

import { Button } from '@/components/core/button';
import tw from '@/tw';
import type { ComponentProps, FC } from '@/types';

const StyledToolbarButton = tw(Button)`
  p-0
  gap-0
  text-accent
  h-[2.625rem]
  w-[2.625rem]
  bg-transparent
  shadow-none
  hocus:bg-accent-dark/[0.1]
  hocus:translate-y-0
  hocus:text-accent
  hocus:shadow-none
`;

export const ToolbarButtonIcon = tw(Icon)`
  fill-accent
  transition-transform
  transform
  rotate-0
  scale-100
  [[aria-expanded="true"]>&]:rotate-45
  [[aria-expanded="true"]>&]:scale-[1.15]
`;

interface ToolbarButtonProps {
  iconPath: string;
  iconSize?: number;
}

export const ToolbarButton: FC<
  ComponentProps<typeof StyledToolbarButton> & ToolbarButtonProps
> = (props) => {
  const { iconPath, iconSize, ...rest } = props;
  return (
    <StyledToolbarButton {...rest}>
      <ToolbarButtonIcon path={iconPath} size={iconSize || 1} />
    </StyledToolbarButton>
  );
};
