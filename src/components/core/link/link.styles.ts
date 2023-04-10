import NextLink from 'next/link';

import tw from '@/tw';

export const StyledLink = tw(NextLink)`
  inline-block
  font-medium
  text-accent
  self-start
  hocus:text-accent-dark
  hocus:underline
  hocus:underline-offset-2
  hocus:decoration-2
`;
