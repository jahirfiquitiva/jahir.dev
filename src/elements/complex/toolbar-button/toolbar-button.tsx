import styled from '@emotion/styled';

import { BaseToolbarLink } from '~/elements/complex/toolbar-link';
import { Component, ComponentProps, mediaQueries } from '~/types';

const PseudoToolbarButton = BaseToolbarLink.withComponent('button');
export const ToolbarButton = styled(PseudoToolbarButton)`
  background-color: rgba(0, 0, 0, 0);
  min-width: var(--toolbar-height);
  min-height: unset;
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
  title: string;
  active?: boolean;
  onClick?: () => void;
}

const BaseToolbarMenuToggle: Component<ToolbarMenuToggle> = ({
  title,
  active,
  onClick,
  className,
}) => {
  return (
    <ToolbarButton
      name={title}
      title={title}
      aria-label={title}
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
