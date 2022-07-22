import { Heading, Section } from '@/components/atoms';
import { SponsorsProvider } from '@/providers/sponsors';
import { styled } from '~/stitches';

import { NowPlaying } from './NowPlaying';
import { SponsorsStats } from './SponsorsStats';
import { TopTracks } from './TopTracks';

const CardsContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1fr)',
  gap: 'calc($$verticalContentPadding / 4)',
  mt: 'calc($$verticalContentPadding / 4)',
  mb: '$$verticalContentPadding',
  '@mobile-md': {
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  },
  '@tablet-sm': {
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
  },
});

export const Dashboard = () => {
  return (
    <Section id={'dashboard'}>
      <Heading>Dashboard</Heading>
      <NowPlaying />
      <CardsContainer>
        <SponsorsProvider>
          <SponsorsStats />
        </SponsorsProvider>
      </CardsContainer>
      <TopTracks />
    </Section>
  );
};
