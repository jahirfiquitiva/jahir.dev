import { useMemo } from 'react';
import tw from 'twin.macro';

import { Link, LinkProps, baseLinkStyles } from '~/components/atoms/simple';
import { Component } from '~/types';

const ignoredLinksClasses = ['anchor', 'toc-link'];
const isIgnoredLinkClassName = (className?: string): boolean => {
  if (!className) return false;
  return ignoredLinksClasses.some((ignored) =>
    className.toLowerCase().includes(ignored.toLowerCase()),
  );
};

export const MdxLink: Component<LinkProps> = (props) => {
  const isIgnored = useMemo(
    () => isIgnoredLinkClassName(props.className),
    [props.className],
  );
  if (isIgnored) {
    return <a css={[baseLinkStyles, tw`hocus:underline`]} {...props} />;
  }
  return <Link {...props} />;
};
