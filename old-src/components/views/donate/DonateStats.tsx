import { Heading } from '@/components/core';
import type { FC } from '@/types';
import { styled } from '~/stitches';

import { SponsorsStats } from '../dashboard/stats';

const StatsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 'calc($$verticalContentPadding / 4)',
});

const StatsCardsContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1fr)',
  gap: 'calc($$verticalContentPadding / 4)',
  '@mobile-md': {
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  },
  '@tablet-sm': {
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
  },
});

export const DonateStats: FC = () => {
  return (
    <StatsContainer>
      <Heading as={'h4'}>Stats</Heading>
      <p>For transparency, these are the latest stats from GitHub Sponsors:</p>
      <StatsCardsContainer>
        <SponsorsStats />
      </StatsCardsContainer>
    </StatsContainer>
  );
};
