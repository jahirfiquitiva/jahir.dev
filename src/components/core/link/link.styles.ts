import NextLink from 'next/link';

import tw from '@/tw';

export const StyledLink = tw(NextLink)`
  inline-block
  font-medium
  text-accent
  self-start
  hover:text-accent-dark
  hover:underline
  hover:underline-offset-2
  hover:decoration-2
`;
