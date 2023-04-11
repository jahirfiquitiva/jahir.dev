import NextLink from 'next/link';
import tw from 'tailwind-styled-components';

export const StyledLink = tw(NextLink)`
  inline-block
  font-medium
  text-accent
  self-start
  transition-colors
  hocus:text-accent-dark
  hocus:underline
  hocus:underline-offset-2
  hocus:decoration-2
`;
