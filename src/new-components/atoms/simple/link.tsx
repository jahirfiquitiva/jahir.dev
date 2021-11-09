import NextLink from 'next/link';
import tw, { styled } from 'twin.macro';

import { Component, ComponentProps } from '~/types';

interface BaseLinkProps {
  underline?: boolean;
}

export interface LinkProps extends ComponentProps, BaseLinkProps {
  title: string;
  href: string;
  newTab?: boolean;
}

const BaseLinkStyles = tw`
  inline-block
  text-accent  
  hocus:(text-accent-dark)
`;

const StyledLink = styled.a<BaseLinkProps>(({ underline }) => [
  BaseLinkStyles,
  underline
    ? tw`underline hocus:(underline)`
    : tw`no-underline hocus:(no-underline)`,
]);

const isLocalLink = (href: string) =>
  href.startsWith('/') || href.startsWith('#');

const Link: Component<LinkProps> = (props) => {
  const {
    title,
    href,
    newTab = !isLocalLink(href),
    underline = true,
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
        underline={underline}
        className={className}
        style={style}
      >
        {children}
      </StyledLink>
    </NextLink>
  );
};

export default Link;
