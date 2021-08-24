import { ElementType } from 'react';
import styled from '@emotion/styled';
import Icon from '@mdi/react';
import { mdiCreditCardOutline, mdiHeartOutline } from '@mdi/js';
import { Component, ComponentProps } from '~/components/fc';

const baseButtonStyles = `
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

export const BaseButton = styled.button`
  ${baseButtonStyles}
`;

export interface IconButtonProps extends ComponentProps {
  as?: ElementType<any>;
  href?: string;
  target?: string;
  rel?: string;
  icon?: string;
  iconSize?: number;
}

export const Button: Component<IconButtonProps> = (props) => {
  const {
    as,
    icon,
    iconSize = 1,
    className,
    children,
    href,
    rel,
    target,
  } = props;

  return (
    <BaseButton
      as={as}
      className={className}
      /* @ts-ignore */
      href={href}
      rel={rel}
      target={target}
    >
      {icon && <Icon path={icon} size={iconSize} />}
      {children && <span>{children}</span>}
    </BaseButton>
  );
};

const BaseGitHubButton = styled(Button)`
  background-color: #d34399;

  &:hover,
  &:focus {
    background-color: #a43477;
  }
`;

export const GitHubButton: Component<IconButtonProps> = (props) => {
  return <BaseGitHubButton {...props} icon={mdiHeartOutline} />;
};

const BasePayPalButton = styled(Button)`
  background-color: #1a4593;

  &:hover,
  &:focus {
    background-color: #002b7a;
  }
`;

export const PayPalButton: Component<IconButtonProps> = (props) => {
  return <BasePayPalButton {...props} icon={mdiCreditCardOutline} />;
};
