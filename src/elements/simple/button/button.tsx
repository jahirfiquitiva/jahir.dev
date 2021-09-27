import styled from '@emotion/styled';
import Icon from '@mdi/react';
import Link from 'next/link';

import { Component, ComponentProps } from '~/elements/base/fc';

const baseButtonStyles = `
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: var(--on-accent);
  padding: 0.4rem 0.8rem;
  text-decoration: none;
  min-height: 42px;

  & > *:not(:last-child) {
    margin-right: 0.4rem;
  }
`;

const BaseButton = styled.button`
  ${baseButtonStyles}
`;

export interface ButtonProps extends ComponentProps {
  type?: 'button' | 'reset' | 'submit' | undefined;
  title?: string;
  icon?: string;
  iconSize?: number;
  disabled?: boolean;
  onClick?: () => void;
}

export const Button: Component<ButtonProps> = (props) => {
  const {
    type,
    title,
    icon,
    iconSize = 1,
    className,
    disabled,
    children,
    onClick,
  } = props;

  return (
    <BaseButton
      type={type}
      title={title}
      aria-label={title}
      className={className}
      disabled={disabled}
      onClick={onClick}
    >
      {icon && <Icon path={icon} size={iconSize} />}
      {children && <span>{children}</span>}
    </BaseButton>
  );
};

const BaseLinkButton = styled.a`
  ${baseButtonStyles}
  line-height: 1;
`;

export interface LinkButtonProps extends Omit<ButtonProps, 'onClick'> {
  to: string;
  title?: string;
  newTab?: boolean;
}

export const LinkButton: Component<LinkButtonProps> = (props) => {
  const {
    title,
    icon,
    iconSize = 0.9,
    className,
    children,
    to,
    newTab = true,
  } = props;

  if (!newTab) {
    const linkProps = { ...props, newTab: undefined };
    return (
      <Link href={to} passHref>
        <BaseLinkButton
          title={title}
          aria-label={title}
          className={`button ${className}`}
          href={to}
          target={newTab ? '_blank' : '_self'}
          rel={'noopener noreferrer'}
          {...linkProps}
        />
      </Link>
    );
  }

  return (
    <BaseLinkButton
      title={title}
      aria-label={title}
      className={`button ${className}`}
      href={to}
      target={newTab ? '_blank' : '_self'}
      rel={'noopener noreferrer'}
    >
      {icon && <Icon path={icon} size={iconSize} />}
      {children && <span>{children}</span>}
    </BaseLinkButton>
  );
};

const BaseLinkIconButton: Component<LinkButtonProps> = (props) => {
  const { title, icon, iconSize = 0.95, className, to, newTab = true } = props;

  if (!newTab) {
    const linkProps = { ...props, newTab: undefined };
    return (
      <Link href={to} passHref>
        <BaseLinkButton
          title={title}
          aria-label={title}
          className={`button link-button ${className}`}
          href={to}
          target={newTab ? '_blank' : '_self'}
          rel={'noopener noreferrer'}
          {...linkProps}
        />
      </Link>
    );
  }

  return (
    <BaseLinkButton
      title={title}
      aria-label={title}
      className={`button link-button ${className}`}
      href={to}
      target={newTab ? '_blank' : '_self'}
      rel={'noopener noreferrer'}
    >
      {icon && <Icon path={icon} size={iconSize} />}
    </BaseLinkButton>
  );
};

export const LinkIconButton = styled(BaseLinkIconButton)`
  padding: 0.425rem;
  min-height: 24px;
  min-width: 24px;
  color: #fff;

  & svg {
    color: #fff;
    fill: #fff;
  }
`;
