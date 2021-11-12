import Link from 'next/link';
import tw from 'twin.macro';

import { isLocalLink } from '~/new-components/atoms/simple';
import { Component, ComponentProps } from '~/types';

interface MdxLinkProps extends ComponentProps {
  href: string;
}

const linkStyles = tw`
  font-medium
  inline-block
  text-accent  
  hocus:(underline text-accent-dark dark:text-accent-light)
`;

export const MdxLink: Component<MdxLinkProps> = (props) => {
  const { href } = props;

  if (isLocalLink(href)) {
    return (
      <Link href={href}>
        <a {...props} css={linkStyles}>
          {props.children}
        </a>
      </Link>
    );
  }

  return (
    <a
      target={'_blank'}
      rel={'noopener noreferrer'}
      {...props}
      css={linkStyles}
    />
  );
};
