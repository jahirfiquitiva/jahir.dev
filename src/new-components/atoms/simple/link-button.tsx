import Icon from '@mdi/react';
import tw, { styled } from 'twin.macro';

import { ButtonStyles } from './button';
import { Link, LinkProps } from './link';

import { Component } from '~/types';

const StyledLinkButton = styled(Link)`
  ${ButtonStyles}
  & > *:not(:last-child) {
    ${tw`mr-4`}
  }
  ${tw`hocus:(text-accent-text)`}
`;

const BaseLinkButton: Component<LinkProps> = (props) => {
  return <StyledLinkButton {...props} underline={false} />;
};

export interface LinkButtonProps extends LinkProps {
  icon?: string;
  iconSize?: number;
  disabled?: boolean;
}

export const LinkButton: Component<LinkButtonProps> = (props) => {
  const { icon, iconSize = 1, children } = props;

  return (
    <BaseLinkButton {...props}>
      {icon && <Icon path={icon} size={iconSize} />}
      {children && <span>{children}</span>}
    </BaseLinkButton>
  );
};
