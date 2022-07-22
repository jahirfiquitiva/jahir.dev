import { useRequest } from '@/hooks';
import type { TrackData, TopTrackData } from '@/lib/spotify';
import type { FC } from '@/types';
import { styled } from '~/stitches';

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

export const NowPlaying: FC = () => {
  const { data, loading } = useRequest<TrackData>('/api/now-playing');
  if (!loading && !data) return null;
  return (
    <Container>
      {data?.isPlaying ? <SmallText>Currently listening to…</SmallText> : null}
      <WideSongCard song={data?.isPlaying ? (data as TopTrackData) : {}} />
    </Container>
  );
};
