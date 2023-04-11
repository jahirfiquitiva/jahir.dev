/* eslint-disable max-len */
import Icon from '@mdi/react';
import tw from 'tailwind-styled-components';

import { Button } from '@/components/core/button';

export const Fab = tw(Button)<{ $shown: boolean }>`
  flex
  z-[2]
  fixed
  right-0
  bottom-0
  m-16
  p-12
  rounded-half
  h-[50]
  w-[50]
  gap-0
  ${(p) => (p.$shown ? 'visible' : 'invisible')}
  ${(p) => (p.$shown ? 'pointer-events-auto' : 'pointer-events-none')}
  ${(p) => (p.$shown ? 'select-auto' : 'select-none')}
  ${(p) => (p.$shown ? 'opacity-1' : 'opacity-0')}
  transform
  ${(p) => (p.$shown ? 'translate-y-0' : 'translate-y-[72px]')}
  uppercase
  tracking-wider
  text-3xs
  border
  border-solid
  border-accent-dark/[0.12]
  [box-shadow:0_0_1px_1px_var(--color-divider),0_0_6px_1px_rgba(var(--color-accent-dark)_/_.24)]
  hocus:border-accent-dark/[0.24]
  hocus:[box-shadow:0_0_1px_1px_var(--color-divider),0_0_6px_1px_rgba(var(--color-accent-dark)_/_.32)]

  tablet-sm:m-24
  desktop:h-[unset]
  desktop:w-[unset]
  desktop:m-32
  desktop:py-14
  desktop:px-20
  desktop:rounded-full
`;

export const FabIcon = tw(Icon)`
  block
  visible
  desktop:hidden
  desktop:invisible
`;

export const FabText = tw.span`
  hidden
  invisible
  desktop:block
  desktop:visible
`;
