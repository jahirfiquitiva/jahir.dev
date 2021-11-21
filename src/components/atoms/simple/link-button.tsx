import styled from '@emotion/styled';
import Icon from '@mdi/react';

import { ButtonStyles, BaseButtonProps } from './button';
import { Link, LinkProps } from './link';

import { Component } from '~/types';

const StyledLinkButton = styled(Link)`
  ${ButtonStyles}
  &:hover, &:focus {
    color: var(--on-accent);
    .dark & {
      color: var(--on-accent);
    }
  }
`;

const BaseLinkButton: Component<LinkProps> = (props) => {
  return <StyledLinkButton {...props} underline={false} />;
};

export interface LinkButtonProps extends LinkProps, BaseButtonProps {}

export const LinkButton: Component<LinkButtonProps> = (props) => {
  const {
    icon,
    iconSize = 1,
    children,
    wrapChildrenInSpan = true,
    ...otherProps
  } = props;

  return (
    <BaseLinkButton {...otherProps}>
      {icon && <Icon path={icon} size={iconSize} />}
      {children && wrapChildrenInSpan ? <span>{children}</span> : children}
    </BaseLinkButton>
  );
};
