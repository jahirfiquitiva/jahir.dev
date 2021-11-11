import Icon from '@mdi/react';
import { MouseEventHandler } from 'react';
import tw from 'twin.macro';

import { Component, ComponentProps } from '~/types';

export const ButtonStyles = tw`
  inline-flex
  items-center
  content-center
  bg-accent
  text-accent-text
  border-none
  rounded
  min-h-button
  px-8
  py-4
  font-manrope
  font-semibold
  tracking-button
  cursor-pointer
  transition-all
  duration-200
  ease-in-out

  all-child:(not-last:(mr-4))
  hocus:(bg-accent-dark -translate-y-1 min-h-button)
  disabled:(opacity-50 pointer-events-none cursor-not-allowed)
`;

export interface ButtonProps extends ComponentProps {
  title: string;
  type?: 'button' | 'reset' | 'submit' | undefined;
  icon?: string;
  iconSize?: number;
  disabled?: boolean;
  wrapChildrenInSpan?: boolean;
  // eslint-disable-next-line @typescript-eslint/ban-types
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
