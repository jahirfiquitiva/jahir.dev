import { useRequest } from '@/hooks';
import type { TrackData, TopTrackData } from '@/lib/spotify';
import type { FC } from '@/types';
import { styled } from '~/stitches';

import { SongCard } from './SongCard';

const Container = styled('div', {
  mt: 'calc($$verticalContentPadding / 4)',
  mb: 'calc($$verticalContentPadding / 2)',
});

const SmallText = styled('small', {
  my: 'calc($$verticalContentPadding / 4)',
});

const WideSongCard = styled(SongCard, {
  '@tablet-sm': {
    maxWidth:
      'calc(calc($sizes$max-site-width / 2) - calc($$verticalContentPadding / 4)) !important',
  },
});

export const NowPlaying: FC = () => {
  const { data, loading } = useRequest<TrackData>('/api/now-playing');
  if (!loading && !data) return null;
  return (
    <Container>
      <SmallText>Currently listening to…</SmallText>
      <WideSongCard song={data as TopTrackData} />
    </Container>
  );
};
