import { FC } from 'react';
import { styled, theme } from '~/stitches';
import { Logo } from '@/components/atoms';

const ToolbarContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',

  '& svg': {
    width: '24px',
    height: '24px',
  },
});

interface ToolbarProps {}

export const Toolbar: FC<ToolbarProps> = (props) => {
  return (
    <ToolbarContainer>
      <Logo fillColor={theme.colors.accent?.value} />
    </ToolbarContainer>
  );
};
