import NextLink from 'next/link';
import tw from 'tailwind-styled-components';

export const StyledLink = tw(NextLink)`
  inline-block
  font-medium
  text-accent
  self-start
  transition-colors
  hocus:text-accent-dark
  hocus:decoration-2
`;
