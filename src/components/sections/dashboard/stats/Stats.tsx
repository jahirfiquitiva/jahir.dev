import { SponsorsProvider } from '@/providers/sponsors';
import type { FC } from '@/types';
import { styled } from '~/stitches';

import { ReactionsStats } from './ReactionsStats';
import { SponsorsStats } from './SponsorsStats';
import { ViewsStats } from './ViewsStats';

const StatsContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1fr)',
  gap: 'calc($$verticalContentPadding / 2.5)',
  mt: 'calc($$verticalContentPadding / 4)',
  mb: '$$verticalContentPadding',
  '@mobile-md': {
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  },
  '@tablet-sm': {
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
  },
});

export const Stats: FC = () => {
  return (
    <StatsContainer>
      <ViewsStats />
      <ReactionsStats />
      <SponsorsProvider>
        <SponsorsStats />
      </SponsorsProvider>
    </StatsContainer>
  );
};
