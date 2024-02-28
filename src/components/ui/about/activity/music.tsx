'use client';

import tunez from '@/assets/images/tunez.png';
import { useRequest } from '@/hooks/use-request';
import type { NowPlayingAPIResponse } from '@/types/spotify/request';
import cx from '@/utils/cx';

import {
  ActivityCard,
  BackgroundImage,
  Content,
  Header,
  MusicBar,
  MusicBarsGroup,
  Texts,
  TrackArtist,
  TrackName,
  AlbumCover,
} from './activity.styles';

export const Music = () => {
  const { data, loading } =
    useRequest<NowPlayingAPIResponse>('/api/now-playing');
  const { track, isPlaying = false } = data || {};
  return (
    <ActivityCard
      title={
        loading
          ? 'Loading…'
          : !track
            ? 'tunez playlist on Spotify'
            : `"${track.name}" by "${track.artist}" on Spotify`
      }
      href={track?.url || 'https://tunez.jahir.dev'}
      target={'_blank'}
      className={cx(
        loading ? 'motion-safe:animate-pulse' : '',
        loading ? 'select-none pointer-events-none' : '',
      )}
      aria-disabled={loading}
      data-umami-event={
        loading ? '-' : isPlaying ? 'Now Playing' : 'Last Played'
      }
      data-umami-event-from={'Activity'}
    >
      <BackgroundImage
        alt={
          loading
            ? 'Loading…'
            : !track
              ? 'tunez playlist cover'
              : `Album cover: "${track.album}" by "${track.artist}"`
        }
        src={track?.image?.url ?? tunez}
        size={78}
        quality={50}
        className={cx(
          isPlaying
            ? 'motion-safe:animate-spin'
            : loading
              ? 'hidden invisible'
              : '',
        )}
        style={{ animationDuration: '15s' }}
      />
      <Content>
        <AlbumCover
          alt={
            loading
              ? 'Loading…'
              : !track
                ? 'tunez playlist cover'
                : `Album cover: "${track.album}" by "${track.artist}"`
          }
          src={track?.image?.url ?? tunez}
          size={track?.image?.width || 78}
        />
        <Texts className={'mix-blend-hard-light'}>
          <Header>
            <span>
              {loading ? 'Loading' : isPlaying ? 'Now Playing' : 'Last Played'}
            </span>
            {isPlaying ? (
              <MusicBarsGroup>
                <MusicBar />
                <MusicBar
                  style={{ animationDelay: '-2.2s', transformOrigin: 'bottom' }}
                />
                <MusicBar
                  style={{ animationDelay: '-3.7s', transformOrigin: 'bottom' }}
                />
              </MusicBarsGroup>
            ) : null}
          </Header>
          <TrackName
            className={cx(
              loading ? 'bg-divider' : '',
              isPlaying ? 'group-hocus/track:decoration-wavy' : '',
            )}
          >
            {loading ? '' : track?.name ?? 'tunez'}
          </TrackName>
          <TrackArtist className={loading ? 'bg-divider' : ''}>
            {loading ? '' : track?.artist ?? '99 top recently listened songs'}
          </TrackArtist>
        </Texts>
      </Content>
    </ActivityCard>
  );
};
