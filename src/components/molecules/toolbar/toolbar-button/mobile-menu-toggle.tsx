import { styled } from '~/stitches';

import { ToolbarButton } from './toolbar-button.styles';

export const MobileMenuToggle = styled(ToolbarButton, {
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
