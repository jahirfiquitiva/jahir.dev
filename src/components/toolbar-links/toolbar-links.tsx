import styled from '@emotion/styled';

import { Component, ComponentProps } from '~/elements/fc';
import { ToolbarLink } from '~/elements/toolbar-link';

const collapsedStyles = `
  visibility: hidden;
  pointer-events: none;
  opacity: 0;
  max-height: 0;
`;

const expandedStyles = `
  visibility: visible;
  pointer-events: auto;
  opacity: 1;
  max-height: 100%;
`;

const ToolbarLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  grid-row: 2;
  grid-column: 1 / 3;
  transition: all 0.2s ease-in-out;
  height: 0;
  ${collapsedStyles}

  &.active {
    height: 100%;
    ${expandedStyles}
    & a {
      margin: 0.1rem 0;
      &:first-of-type {
        margin-top: 0.2rem;
      }
      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }

  @media (min-width: 960px) {
    visibility: visible;
    pointer-events: auto;
    opacity: 1;
    justify-content: flex-end;
    flex-direction: row;
    grid-row: 1;
    grid-column: 2;
    height: 100%;

    & a {
      margin: 0;
    }
  }
`;

interface ToolbarLinksProps extends ComponentProps {
  active?: boolean;
}

export const ToolbarLinks: Component<ToolbarLinksProps> = (props) => {
  const { active } = props;
  return (
    <ToolbarLinksContainer className={active ? 'active' : ''}>
      <ToolbarLink
        to={'/blog'}
        gradientColor={'blue-to-green'}
        emoji={'📝'}
        label={'Blog'}
        active
      />
      <ToolbarLink
        to={'/uses'}
        gradientColor={'yellow-to-orange'}
        emoji={'⚡️'}
        label={'Uses'}
      />
      <ToolbarLink
        to={'/donate'}
        gradientColor={'red-to-purple'}
        emoji={'🧡'}
        label={'Donate'}
      />
      <ToolbarLink
        to={'/contact'}
        gradientColor={'brand-to-blue'}
        emoji={'📬'}
        label={'Contact'}
      />
    </ToolbarLinksContainer>
  );
};
