import styled from '@emotion/styled';

import { Component, ComponentProps } from '~/elements/base/fc';
import { BaseToolbarLink } from '~/elements/complex/toolbar-link';
import { mediaQueries } from '~/types';

const PseudoToolbarButton = BaseToolbarLink.withComponent('button');
export const ToolbarButton = styled(PseudoToolbarButton)`
  background-color: rgba(0, 0, 0, 0);
  min-width: var(--toolbar-height);
  max-width: var(--toolbar-height);
  max-height: calc(var(--toolbar-height) - 0.6rem);
  padding: 0.4rem 0.8rem;

  &.active,
  &:active,
  &:focus,
  &:hover {
    transform: none;
  }

  ${mediaQueries.desktop} {
    max-width: 48px;
    padding: 0 0.4rem;
  }
`;

interface ToolbarMenuToggle extends ComponentProps {
  name?: string;
  active?: boolean;
  onClick?: () => void;
}

const BaseToolbarMenuToggle: Component<ToolbarMenuToggle> = ({
  name,
  active,
  onClick,
  className,
}) => {
  return (
    <ToolbarButton
      name={name}
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
  min-width: 48px;
  padding: 0.4rem 0 0;
  margin-left: 0.4rem;
  color: var(--accent);
  display: inline-block;
  visibility: visible;
  pointer-events: auto;
  opacity: 1;

  &.active,
  &:active,
  &:focus,
  &:hover {
    color: var(--accent-dark);
  }

  ${mediaQueries.tablet.lg} {
    display: none;
    visibility: hidden;
    pointer-events: none;
    opacity: 0;
  }
`;
