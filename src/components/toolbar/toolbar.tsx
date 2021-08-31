import styled from '@emotion/styled';
import { useState } from 'react';

import { ToolbarLinks } from '~/components/toolbar-links';
import { Component } from '~/elements/fc';
import { ToolbarButton, ToolbarMenuToggle } from '~/elements/toolbar-button';
import { ToolbarLink } from '~/elements/toolbar-link';

const ToolbarLogo = styled(ToolbarLink)`
  color: black;
  grid-row: 1;
  grid-column: 1;
`;

const ToolbarActionButtons = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  max-height: var(--toolbar-height);
  grid-row: 1;
  grid-column: 2;

  @media (min-width: 960px) {
    grid-column: 3;
    justify-content: center;
  }
`;

const ToolbarContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: var(--toolbar-height) minmax(
      calc(var(--toolbar-height) * 4),
      100%
    );
  grid-auto-rows: minmax(min-content, max-content);
  grid-gap: 0.1rem;
  min-height: var(--toolbar-height);
  max-height: var(--toolbar-height);
  max-width: var(--max-site-width);
  margin: 0 auto;
  transition: all 0.5s ease-in-out;

  &.active {
    max-height: unset;
  }

  @media (min-width: 960px) {
    grid-template-columns: auto 1fr auto;
    grid-template-rows: 1fr;
  }
`;

export const Toolbar: Component = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <ToolbarContainer className={expanded ? 'active' : ''}>
      <ToolbarLogo
        to={'/'}
        label={'Jahir Fiquitiva'}
        gradientColor={'brand-to-blue'}
      />
      <ToolbarLinks active={expanded} />
      <ToolbarActionButtons>
        <ToolbarButton>🌚</ToolbarButton>
        <ToolbarMenuToggle
          active={expanded}
          onClick={() => {
            setExpanded(!expanded);
          }}
        />
      </ToolbarActionButtons>
    </ToolbarContainer>
  );
};
