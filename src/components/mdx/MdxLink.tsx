import { ComponentProps, useMemo } from 'react';

import { Link } from '@/components/atoms';
import { FC } from '@/types';

const ignoredLinksClasses = ['anchor', 'toc-link'];
const isIgnoredLinkClassName = (className?: string): boolean => {
  if (!className) return false;
  return ignoredLinksClasses.some((ignored) =>
    className.toLowerCase().includes(ignored.toLowerCase()),
  );
};

// const StyledLink = styled.a`
//   ${baseLinkStyles}

//   &:hover,
//   &:focus {
//     text-decoration: underline;
//   }
// `;

export const MdxLink: FC<ComponentProps<typeof Link>> = (props) => {
  const isIgnored = useMemo(
    () => isIgnoredLinkClassName(props.className),
    [props.className],
  );
  if (isIgnored) {
    return <a {...props} data-type={'ignored'} />;
  }
  return <Link {...props} />;
};
