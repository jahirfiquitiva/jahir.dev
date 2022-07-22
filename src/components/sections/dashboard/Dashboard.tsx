import { DotsDivider, Heading, Img, Section } from '@/components/atoms';

import { NowPlaying } from './NowPlaying';
import { Stats } from './stats';
import { TopTracks } from './TopTracks';

export const Dashboard = () => {
  return (
    <Section id={'dashboard'}>
      <Img
        css={{
          backgroundColor: '$accent-animoji',
          borderRadius: '50%',
          mb: 'calc($$verticalContentPadding / 2)',
          '@tablet-sm': {
            mx: 'auto',
          },
        }}
        src={'/static/images/jahir/animoji.png'}
        alt={'Jahir as an Animoji'}
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
