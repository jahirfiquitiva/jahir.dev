import { useNowPlaying } from '@/hooks';
import type { TopTrackData } from '@/lib/spotify';
import type { FC } from '@/types';

import { ActivityItem } from './ActivityItem';
import { SongCard } from './SongCard';

export const NowPlaying: FC = () => {
  const { data, loading } = useNowPlaying();
  if (!loading && !data) return null;
  return (
    <ActivityItem title={'Currently listening to…'}>
      <SongCard song={data?.isPlaying ? (data as TopTrackData) : {}} />
    </ActivityItem>
  );
};
