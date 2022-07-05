import { Button } from '@/components/atoms';
import { styled } from '~/stitches';

const ToolbarButton = styled(Button, {
  height: '42px',
  width: '42px',
  borderRadius: '6px',
  backgroundColor: '$transparent',
  hocus: {
    backgroundColor: 'rgba($colors$toolbar-glow / .1)',
  },
});

export const MobileMenu = styled(ToolbarButton, {
  '@tablet-sm': {
    hidden: '',
  },
});

export const ThemeToggle = styled(ToolbarButton, {});
