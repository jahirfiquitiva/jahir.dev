import Icon from '@mdi/react';
import type { ComponentProps } from 'react';

import { Button } from '@/components/core';
import type { FC } from '@/types';
import { styled } from '~/stitches';

const StyledToolbarButton = styled(Button, {
  p: 0,
  gap: 0,
  color: '$accent',
  height: '42px',
  width: '42px',
  backgroundColor: '$transparent',
  hocus: {
    backgroundColor: 'rgba($colors$accent-shadow / .1)',
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