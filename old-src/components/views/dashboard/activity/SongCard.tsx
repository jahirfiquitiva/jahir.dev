import { mdiSpotify } from '@/components/icons';
import { TopTrackData } from '@/lib/spotify';
import type { FC } from '@/types';

import { ActivityCard } from './ActivityCard';

interface SongCardProps {
  song?: TopTrackData;
  loading?: boolean;
}

export const SongCard: FC<SongCardProps> = (props) => {
  const { song, ...rest } = props;
  return (
    <ActivityCard
      title={`Listen to "${song?.title}" by "${song?.artist}" on Spotify`}
      href={song?.url || '#'}
      image={{
        url: song?.image?.url || '',
        alt: `Album image for song "${song?.title}" by "${song?.artist}"`,
      }}
      texts={{
        first: song?.title || '',
        second: `${song?.artist} • ${song?.album}`,
      }}
      empty={{
        is: !song || !Object.keys(song).length,
        text: 'Not playing…',
        iconPath: mdiSpotify,
      }}
      {...rest}
    />
  );
};
