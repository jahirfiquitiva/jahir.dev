import type { ComponentProps } from 'react';

import { Link } from '@/components/atoms/link';
import { tw } from '@/utils/cx';

const ignoredLinksClasses = ['anchor', 'toc-link'];
const shouldIgnoreNextLink = (className?: string): boolean => {
  if (!className) return false;
  return ignoredLinksClasses.some((ignored) =>
    className.toLowerCase().includes(ignored.toLowerCase()),
  );
};

const StyledLink = tw.a`
  inline-block
  font-medium
  text-accent
  self-start
  transition-colors
  hocus:text-accent-dark
`;

export const MdxLink = (props: ComponentProps<typeof Link>) => {
  const ignoredNextLink = shouldIgnoreNextLink(props.className);
  if (ignoredNextLink || props.href.toString().startsWith('#'))
    return <StyledLink {...props} href={props.href.toString()} />;
  return <Link {...props} />;
};
