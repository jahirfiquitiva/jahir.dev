import tunez from '@/assets/images/tunez.png';

import {
  NowPlayingCard,
  NowPlayingHeader,
  NowPlayingTexts,
  TrackArtist,
  TrackName,
  AlbumImg,
  NowPlayingContent,
} from './now-playing.styles';

export const TunezCard = () => {
  return (
    <NowPlayingCard
      title={'Check the "tunez" playlist on Spotify'}
      href={'https://tunez.jahir.dev'}
    >
      <NowPlayingContent>
        <AlbumImg
          src={tunez}
          alt={'Cover art for "tunez" playlist'}
          size={96}
        />
        <NowPlayingTexts>
          <NowPlayingHeader>
            <span>Playlist</span>
          </NowPlayingHeader>
          <div className={'flex flex-col'}>
            <TrackName>tunez</TrackName>
            <TrackArtist>Top 99 recently played songs</TrackArtist>
          </div>
        </NowPlayingTexts>
      </NowPlayingContent>
    </NowPlayingCard>
  );
};
