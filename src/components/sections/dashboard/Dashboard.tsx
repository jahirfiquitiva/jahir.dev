import { Heading, Section } from '@/components/atoms';

import { NowPlaying } from './NowPlaying';
import { Stats } from './stats';
import { TopTracks } from './TopTracks';

export const Dashboard = () => {
  return (
    <Section id={'dashboard'}>
      <Heading as={'h2'} shadow={'purple'} gradient={'purple-to-brand'}>
        Dashboard
      </Heading>
      <NowPlaying />
      <Stats />
      <TopTracks />
    </Section>
  );
};
