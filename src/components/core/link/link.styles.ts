import NextLink from 'next/link';

import { tw } from '@/utils/cx';

export const StyledLink = tw(NextLink)`
  inline-block
  font-medium
  text-accent
  self-start
  transition-colors
  hocus:text-accent-dark
  hocus:decoration-2
`;
