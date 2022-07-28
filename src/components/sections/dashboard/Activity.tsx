import { useRequest, useActivity } from '@/hooks';
import type { TrackData, TopTrackData } from '@/lib/spotify';
import type { FC } from '@/types';
import { mdiAbTesting } from '@mdi/js';
import { styled } from '~/stitches';
import { ActivityCard } from './ActivityCard';

import { SongCard } from './SongCard';

const Container = styled('div', {
  my: 'calc($$verticalContentPadding / 6)',
});

const SmallText = styled('small', {
  display: 'block',
  my: 'calc($$verticalContentPadding / 4)',
});

const WideSongCard = styled(SongCard, {
  '@tablet-sm': {
    maxWidth:
      'calc(calc($sizes$max-site-width / 2) - calc($$verticalContentPadding / 5)) !important',
  },
});

export const Activity: FC = () => {
  const { data: activities } = useActivity();
  const [activity] = activities?.activities || [];
  // return (
  //   <pre>
  //     <code>{JSON.stringify(activity, null, 2)}</code>
  //   </pre>
  // );

  const { data, loading } = useRequest<TrackData>('/api/now-playing');
  // if (!loading && !data) return null;
  return (
    <Container>
      {data?.isPlaying ? <SmallText>Currently listening to…</SmallText> : null}
      <WideSongCard song={data?.isPlaying ? (data as TopTrackData) : {}} />

      <ActivityCard
        title={'Test'}
        texts={{
          first: activity?.name || '',
          second: activity?.details || '',
          third: activity?.state,
        }}
        empty={{
          is: false,
          text: 'Nothing',
          iconPath: mdiAbTesting,
        }}
      />
    </Container>
  );
};
