import Image from 'next/image';
import Link from 'next/link';

import { Component, ComponentProps } from '~/elements/base/fc';

const CustomLink: Component<ComponentProps & { href: string }> = (props) => {
  const { href } = props;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props} />
      </Link>
    );
  }

  return <a target={'_blank'} rel={'noopener noreferrer'} {...props} />;
};

export const MDXComponents = {
  Image,
  a: CustomLink,
};

export default MDXComponents;
