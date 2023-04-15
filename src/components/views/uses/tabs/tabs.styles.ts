import tw from 'tailwind-styled-components';

import { Section } from '@/components/core/section';

export const TabsList = tw.div`
  flex
  flex-row
  items-center
  p-6
  -mx-6
  gap-12
  max-w-full
  overflow-y-hidden
`;

export const TabPanel = tw(Section)`
  transition-all
  ${(p) => p.hidden ? 'hidden' : 'flex'}
  ${(p) => p.hidden ? 'invisible' : 'visible'}
  ${(p) => p.hidden ? 'opacity-0' : 'opacity-100'}
  ${(p) => p.hidden ? 'pointer-events-none' : 'pointer-events-auto'}
  ${(p) => p.hidden ? 'select-none' : 'select-auto'}
`;