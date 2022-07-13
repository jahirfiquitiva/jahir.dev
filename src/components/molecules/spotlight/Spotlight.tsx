// app.tsx
import { KBarProvider, KBarPortal } from 'kbar';

import type { FC } from '@/types';

import { SpotlightContainer } from './SpotlightContainer';
import { SpotlightOverlay } from './SpotlightOverlay';
import { SpotlightSearch } from './SpotlightSearch';

const actions = [
  {
    id: 'blog',
    name: 'Blog',
    shortcut: ['b'],
    keywords: 'writing words',
    perform: () => (window.location.pathname = 'blog'),
  },
  {
    id: 'contact',
    name: 'Contact',
    shortcut: ['c'],
    keywords: 'email',
    perform: () => (window.location.pathname = 'contact'),
  },
];

export const Spotlight: FC = (props) => {
  return (
    <KBarProvider actions={actions}>
      <KBarPortal>
        <SpotlightOverlay>
          <SpotlightContainer>
            <SpotlightSearch />
          </SpotlightContainer>
        </SpotlightOverlay>
      </KBarPortal>
      {props.children}
    </KBarProvider>
  );
};
