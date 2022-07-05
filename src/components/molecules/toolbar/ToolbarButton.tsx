import Icon from '@mdi/react';
import type { ComponentProps } from 'react';

import { Button } from '@/components/atoms';
import { FC } from '@/types';
import { styled } from '~/stitches';

const StyledToolbarButton = styled(Button, {
  p: 0,
  gap: 0,
  color: '$accent',
  height: '42px',
  width: '42px',
  backgroundColor: '$transparent',
  hocus: {
    backgroundColor: 'rgba($colors$toolbar-glow / .1)',
    transform: 'translateY(0)',
  },
});

interface ToolbarButtonProps
  extends ComponentProps<typeof StyledToolbarButton> {
  iconPath: string;
  iconSize?: number;
}

export const ToolbarButton: FC<ToolbarButtonProps> = (props) => {
  const { iconPath, iconSize, ...rest } = props;
  return (
    <StyledToolbarButton {...rest}>
      <Icon path={iconPath} size={iconSize} />
    </StyledToolbarButton>
  );
};

export const MobileMenu = styled(ToolbarButton, {
  '& > svg': {
    transition: 'transform ease-in-out .2s',
    transform: 'rotate(0) scale(1)',
  },
  '@tablet-sm': {
    hidden: true,
  },
  '&[aria-expanded="true"]': {
    '& > svg': {
      transform: 'rotate(45deg) scale(1.15)',
    },
  },
});
