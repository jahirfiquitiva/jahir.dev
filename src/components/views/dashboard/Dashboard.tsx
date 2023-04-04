import { Animoji } from '@/components/compounds';
import { Heading, Section } from '@/components/core';

import { ActivityGrid } from './activity/ActivityGrid';
import { Stats } from './stats';
import { TopTracks } from './TopTracks';

export const Dashboard = () => {
  return (
    <Section id={'dashboard'}>
      <Animoji
        css={{
          mb: 'calc($$verticalContentPadding / 2)',
          '@tablet-sm': {
            mx: 'auto',
          },
        }}
        size={120}
      />
      <Heading as={'h2'} shadow={'purple'} gradient={'purple-to-brand'}>
        Dashboard
      </Heading>
      <Stats />
      <ActivityGrid />
      <TopTracks />
    </Section>
  );
};
