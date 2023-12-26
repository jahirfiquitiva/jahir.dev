import { tw } from '@/utils/cx';

import { ToolbarButton, ToolbarButtonIcon } from './buttons.styles';

export const MobileMenuToggle = tw(ToolbarButton)`
  tablet-sm:hidden
  tablet-sm:invisible
  tablet-sm:pointer-events-none
  tablet-sm:select-none
`;

export const MobileMenuIcon = tw(ToolbarButtonIcon)`
  transition-transform
  transform
  rotate-0
  scale-100
  [[aria-expanded="true"]>&]:rotate-45
  [[aria-expanded="true"]>&]:scale-[1.15]
`;
