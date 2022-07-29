import { useNowPlaying } from '@/hooks';
import type { TopTrackData } from '@/lib/spotify';
import type { FC } from '@/types';

import { ActivityItem } from './ActivityItem';
import { SongCard } from './SongCard';

export const NowPlaying: FC = () => {
  const { data, loading } = useNowPlaying();
  return (
    <ActivityItem
      title={'Currently listening to…'}
      hideTitle={!data?.isPlaying}
    >
      <SongCard
        song={data?.isPlaying ? (data as TopTrackData) : {}}
        loading={loading}
      />
    </ActivityItem>
  );
};
