import tw from 'tailwind-styled-components';

import { ToolbarButton } from './buttons.styles';

export const MobileMenuToggle = tw(ToolbarButton)`
  tablet-sm:hidden
  tablet-sm:invisible
  tablet-sm:pointer-events-none
  tablet-sm:select-none
`;
