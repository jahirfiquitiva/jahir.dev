import { DotsDivider, Heading, Section } from '@/components/atoms';
import { Animoji } from '@/components/compounds';

import { NowPlaying } from './NowPlaying';
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
      <NowPlaying />
      <Stats />
      <DotsDivider />
      <TopTracks />
    </Section>
  );
};
