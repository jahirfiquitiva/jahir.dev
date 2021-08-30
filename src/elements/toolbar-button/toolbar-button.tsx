import styled from '@emotion/styled';
import { useState } from 'react';

import { Component, ComponentProps } from '~/elements/fc';

export const ToolbarButton = styled.button`
  background: none;
  display: inline-flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  max-height: var(--toolbar-height);
  max-width: var(--toolbar-height);
  height: 100%;
  border-radius: 4px;
  padding: 0.4rem 0.8rem;
  text-decoration: none !important;

  &.active,
  &:active,
  &:focus,
  &:hover {
    color: var(--accent-dark) !important;
    background-color: var(--toolbar-highlight);
    border-radius: 4px;
    transform: none;
  }

  @media (min-width: 960px) {
    justify-content: center;
    margin: 0 0.1rem;
  }
`;

interface ToolbarMenuToggle extends ComponentProps {
  onClick?: () => void;
}

const BaseToolbarMenuToggle: Component<ToolbarMenuToggle> = ({
  onClick,
  className,
}) => {
  const [active, setActive] = useState(false);

  return (
    <ToolbarButton
      className={`${className} hamburger hamburger--spring-r ${
        active ? 'is-active' : ''
      }`.trim()}
      type={'button'}
      onClick={() => {
        setActive(!active);
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
`;
