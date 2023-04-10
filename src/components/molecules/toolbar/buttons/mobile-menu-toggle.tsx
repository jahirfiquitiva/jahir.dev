import tw from '@/tw';

import { ToolbarButton } from './buttons.styles';

export const MobileMenuToggle = tw(ToolbarButton)`
  tablet-sm:hidden
  tablet-sm:invisible
  tablet-sm:pointer-events-none
  tablet-sm:select-none
  
  [&>svg]:transition-transform
  [&>svg]:transform
  [&>svg]:rotate-0
  [&>svg]:scale-100

  [&[aria-expanded="true"]>svg]:rotate-45
  [&[aria-expanded="true"]>svg]:scale-[1.15]
`;
