import styled from '@emotion/styled';
import Icon from '@mdi/react';
import { mdiGithub } from '@mdi/js';
import { Component, ComponentProps } from '~/components/fc';

export const Button = styled.button`
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 32px;
  color: #fff;
  padding: 0.4rem 0.8rem;
  text-decoration: none;

  & > *:not(:last-child) {
    margin-right: 0.4rem;
  }
`;

interface IconButtonProps extends ComponentProps {
  icon?: string;
  iconSize?: number;
}

export const IconButton: Component<IconButtonProps> = (props) => {
  const { icon, iconSize = 1, className, children } = props;
  return (
    <Button className={className}>
      {icon && <Icon path={icon} size={iconSize} />}
      {children && <span>{children}</span>}
    </Button>
  );
};

const BaseGitHubButton = styled(IconButton)`
  background-color: #333;

  &:hover,
  &:focus {
    background-color: #292929;
  }
`;

export const GitHubButton: Component<IconButtonProps> = (props) => {
  return <BaseGitHubButton {...props} icon={mdiGithub} />;
};

const BasePayPalButton = styled(IconButton)`
  background-color: #1a4593;

  &:hover,
  &:focus {
    background-color: #002b7a;
  }
`;
