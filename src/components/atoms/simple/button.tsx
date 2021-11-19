import { css } from '@emotion/react';
import Icon from '@mdi/react';
import { MouseEventHandler } from 'react';

import { Component, ComponentProps } from '~/types';

export const ButtonStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: var(--accent);
  color: var(--on-accent);
  border: none;
  border-radius: 6px;
  min-height: 42px;
  padding: 0.4rem 0.8rem;
  font-family: var(--manrope-font);
  font-weight: 600;
  letter-spacing: 0.03125rem;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  gap: 0.4rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
    cursor: not-allowed;
  }

  &:hover,
  &:focus {
    background-color: var(--accent-dark);
    transform: translateY(-0.1rem);
  }

  & > svg:only-child {
    margin: 0 auto;
  }
`;

export interface BaseButtonProps {
  title: string;
  icon?: string;
  iconSize?: number;
  disabled?: boolean;
  wrapChildrenInSpan?: boolean;
}

export interface ButtonProps extends ComponentProps, BaseButtonProps {
  type?: 'button' | 'reset' | 'submit' | undefined;
  onClick?: MouseEventHandler<HTMLButtonElement>;
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
    style,
    wrapChildrenInSpan = true,
  } = props;

  return (
    <button
      type={type}
      name={title}
      title={title}
      aria-label={title}
      disabled={disabled}
      onClick={onClick}
      css={ButtonStyles}
      className={className}
      style={style}
    >
      {icon && <Icon path={icon} size={iconSize} />}
      {children && wrapChildrenInSpan ? <span>{children}</span> : children}
    </button>
  );
};
