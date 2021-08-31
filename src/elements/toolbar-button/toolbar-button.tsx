import styled from '@emotion/styled';

import { Component, ComponentProps } from '~/elements/fc';
import { BaseToolbarLink } from '~/elements/toolbar-link';

const PseudoToolbarButton = BaseToolbarLink.withComponent('button');
export const ToolbarButton = styled(PseudoToolbarButton)`
  background-color: rgba(0, 0, 0, 0);
  min-width: var(--toolbar-height);
  max-width: var(--toolbar-height);
  padding: 0.4rem 0.8rem;
  &.active,
  &:active,
  &:focus,
  &:hover {
    transform: none;
  }
`;

interface ToolbarMenuToggle extends ComponentProps {
  active?: boolean;
  onClick?: () => void;
}

const BaseToolbarMenuToggle: Component<ToolbarMenuToggle> = ({
  active,
  onClick,
  className,
}) => {
  return (
    <ToolbarButton
      className={`${className} hamburger hamburger--spring-r ${
        active ? 'is-active' : ''
      }`.trim()}
      type={'button'}
      onClick={() => {
        if (onClick) onClick();
      }}
    >
      <span className={'hamburger-box'}>
        <span className={'hamburger-inner'}></span>
      </span>
    </ToolbarButton>
  );
};

export const ToolbarMenuToggle = styled(BaseToolbarMenuToggle)`
  padding: 0;
  color: var(--accent);
  &.active,
  &:active,
  &:focus,
  &:hover {
    color: var(--accent-dark);
  }
`;
