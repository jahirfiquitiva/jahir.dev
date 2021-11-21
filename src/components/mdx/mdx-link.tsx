import styled from '@emotion/styled';
import { useMemo } from 'react';

import { Link, LinkProps, baseLinkStyles } from '~/components/atoms/simple';
import { Component } from '~/types';

const ignoredLinksClasses = ['anchor', 'toc-link'];
const isIgnoredLinkClassName = (className?: string): boolean => {
  if (!className) return false;
  return ignoredLinksClasses.some((ignored) =>
    className.toLowerCase().includes(ignored.toLowerCase()),
  );
};

const StyledLink = styled.a`
  ${baseLinkStyles}

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

export const MdxLink: Component<LinkProps> = (props) => {
  const isIgnored = useMemo(
    () => isIgnoredLinkClassName(props.className),
    [props.className],
  );
  if (isIgnored) return <StyledLink {...props} />;
  return <Link {...props} />;
};
