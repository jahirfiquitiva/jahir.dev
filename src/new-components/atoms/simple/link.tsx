import NextLink from 'next/link';
import tw, { styled } from 'twin.macro';

import { Component, ComponentProps } from '~/types';

interface BaseLinkProps {
  underline?: boolean;
  underlineOnHocus?: boolean;
}

const BaseLinkStyles = tw`
  font-medium
  inline-block
  text-accent  
  hocus:(text-accent-dark dark:text-accent-light)
`;

const StyledLink = styled.a<BaseLinkProps>(({ underline }) => [
  BaseLinkStyles,
  underline ? tw`hocus:(underline)` : tw`hocus:(no-underline)`,
]);

export const isLocalLink = (href?: string) =>
  href && (href.startsWith('/') || href.startsWith('#'));

export interface LinkProps extends ComponentProps, BaseLinkProps {
  title: string;
  href: string;
  newTab?: boolean;
}

export const Link: Component<LinkProps> = (props) => {
  const {
    title,
    href,
    newTab = !isLocalLink(href),
    underline,
    underlineOnHocus = underline,
    children,
    className,
    style,
  } = props;

  return (
    <NextLink href={href} passHref>
      <StyledLink
        title={title}
        aria-label={title}
        target={newTab ? '_blank' : '_self'}
        rel={'noopener noreferrer'}
        underline={underline || underlineOnHocus}
        className={className}
        style={style}
      >
        {children}
      </StyledLink>
    </NextLink>
  );
};
