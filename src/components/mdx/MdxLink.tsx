import { ComponentProps, useMemo } from 'react';

import { Link } from '@/components/atoms';
import type { FC } from '@/types';
import { styled } from '~/stitches';

const ignoredLinksClasses = ['anchor', 'toc-link'];
const isIgnoredLinkClassName = (className?: string): boolean => {
  if (!className) return false;
  return ignoredLinksClasses.some((ignored) =>
    className.toLowerCase().includes(ignored.toLowerCase()),
  );
};

const StyledLink = styled('a', {
  display: 'inline-block',
  fontWeight: 500,
  color: '$accent',
  hocus: {
    textDecoration: 'underline',
    color: '$accent-dark',
    dark: {
      color: '$accent-light',
    },
  },
});

export const MdxLink: FC<ComponentProps<typeof Link>> = (props) => {
  const isIgnored = useMemo(
    () => isIgnoredLinkClassName(props.className),
    [props.className],
  );
  if (isIgnored) {
    return <StyledLink {...props} />;
  }
  return <Link {...props} />;
};
