import NextLink from 'next/link';
import type { ComponentProps } from 'react';

import { tw } from '@/utils/cx';

type LinkProps = ComponentProps<typeof NextLink> & { title: string };

export const StyledLink = tw(NextLink).attrs<LinkProps>((p) => ({
  title: p.title,
  'aria-label': p['aria-label'] || p.title,
}))`
  inline-block
  font-medium
  text-accent
  self-start
  transition-colors
  hocus:text-accent-dark
`;
