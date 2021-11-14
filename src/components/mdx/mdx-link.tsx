import { useMemo } from 'react';
import tw from 'twin.macro';

import { Link, LinkProps } from '~/components/atoms/simple';
import { Component } from '~/types';

const ignoredLinksClasses = ['anchor', 'toc-link'];
const isIgnoredLinkClassName = (className?: string): boolean => {
  if (!className) return false;
  return ignoredLinksClasses.some((ignored) =>
    className.toLowerCase().includes(ignored.toLowerCase()),
  );
};

const StyledLink = tw.a`
  font-medium
  inline-block
  text-accent  
  hocus:(underline text-accent-dark dark:text-accent-light)
`;

export const MdxLink: Component<LinkProps> = (props) => {
  const isIgnored = useMemo(
    () => isIgnoredLinkClassName(props.className),
    [props.className],
  );
  if (isIgnored) return <StyledLink {...props} />;
  return <Link {...props} />;
};
