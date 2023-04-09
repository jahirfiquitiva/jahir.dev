import { Animoji } from '@/old/components/compounds';
import { Heading, Section } from '@/old/components/core';

import { ActivityGrid } from './activity/ActivityGrid';
import { Grid } from './grid';
import { Stats } from './stats';
import { TopTracks } from './TopTracks';

export const Dashboard = () => {
  return (
    <Section id={'dashboard'}>
      <Heading shadow={'purple'} gradient={'purple-to-brand'}>
        Dashboard
      </Heading>
      <Grid />
      <Animoji
        css={{
          mb: 'calc($$verticalContentPadding / 2)',
          '@tablet-sm': {
            mx: 'auto',
          },
        }}
        size={120}
      />
      <br />
      <br />
      <Stats />
      <ActivityGrid />
      <TopTracks />
    </Section>
  );
};
