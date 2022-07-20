import { mdiCurrencyUsd, mdiHeartOutline } from '@mdi/js';

import { Heading } from '@/components/atoms';
import { StatCard } from '@/components/compounds';
import type { FC } from '@/types';
import { styled } from '~/stitches';

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
        <StatCard
          title={'sponsors'}
          value={'4'}
          iconPath={mdiHeartOutline}
          color={'#c94091'}
        />
        <StatCard
          title={'earned per month'}
          value={'$25'}
          iconPath={mdiCurrencyUsd}
          color={'#26de81'}
        />
      </StatsCardsContainer>
    </StatsContainer>
  );
};
