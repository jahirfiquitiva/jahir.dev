import type { TopTrackData, TrackData } from '@/old/lib/spotify';
import type { FC } from '@/old/types';

import { ActivityItem } from './ActivityItem';
import { SongCard } from './SongCard';

export const NowPlaying: FC<{ data?: TrackData | null }> = (props) => {
  const { data } = props;
  if (!data) return null;
  return (
    <ActivityItem
      title={'Currently listening to…'}
      hideTitle={!data?.isPlaying}
    >
      <SongCard song={data?.isPlaying ? (data as TopTrackData) : {}} />
    </ActivityItem>
  );
};
