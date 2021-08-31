import styled from '@emotion/styled';
import { useState } from 'react';

import { ToolbarLinks } from '~/components/toolbar-links';
import { ToolbarButton, ToolbarMenuToggle } from '~/elements/toolbar-button';
import { ToolbarLink } from '~/elements/toolbar-link';

const ToolbarLogo = styled(ToolbarLink)`
  color: black;
  background-color: green;
  grid-row: 1;
  grid-column: 1;
`;

const ToolbarActionButtons = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  background-color: yellow;
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
  grid-template-columns: 1fr 1fr;
  grid-template-rows: var(--toolbar-height) 1fr;

  @media (min-width: 960px) {
    grid-template-columns: auto 1fr auto;
    grid-template-rows: 1fr;
  }
`;

export const Toolbar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <ToolbarContainer>
      <ToolbarLogo to={'/'} />
      <ToolbarLinks />
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
