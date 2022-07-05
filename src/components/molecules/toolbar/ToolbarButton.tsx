import Icon from '@mdi/react';
import type { ComponentProps } from 'react';

import { Button } from '@/components/atoms';
import { FC } from '@/types';
import { styled } from '~/stitches';

const StyledToolbarButton = styled(Button, {
  color: '$accent',
  justifyContent: 'center',
  height: '42px',
  width: '42px',
  borderRadius: '6px',
  backgroundColor: '$transparent',
  hocus: {
    backgroundColor: 'rgba($colors$toolbar-glow / .1)',
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
    hidden: '',
  },
  variants: {
    expanded: {
      true: {
        '& > svg': {
          transform: 'rotate(45deg) scale(1.15)',
        },
      },
    },
  },
});
