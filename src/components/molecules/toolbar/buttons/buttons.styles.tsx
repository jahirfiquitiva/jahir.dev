import Icon from '@mdi/react';
import tw from 'tailwind-styled-components';

import { Button } from '@/components/core/button';

export const ToolbarButton = tw(Button)`
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
  text-accent
  fill-accent
`;
