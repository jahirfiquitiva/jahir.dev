import { KBarProvider, KBarPortal } from 'kbar';

import { useSpotlight } from '@/providers/spotlight';
import type { FC } from '@/types';

import { SpotlightContainer } from './SpotlightContainer';
import { SpotlightOverlay } from './SpotlightOverlay';
import { SpotlightResults } from './SpotlightResults';
import { SpotlightSearch } from './SpotlightSearch';

export const Spotlight: FC = (props) => {
  const { spotlightActions } = useSpotlight();
  return (
    <KBarProvider actions={spotlightActions}>
      <KBarPortal>
        <SpotlightOverlay>
          <SpotlightContainer>
            <SpotlightSearch />
            <SpotlightResults />
          </SpotlightContainer>
        </SpotlightOverlay>
      </KBarPortal>
      {props.children}
    </KBarProvider>
  );
};
