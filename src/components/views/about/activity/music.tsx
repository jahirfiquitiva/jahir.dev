'use client';

import { Img } from '@/components/img';
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
} from './activity.styles';

export const Music = () => {
  const { data, loading } =
    useRequest<NowPlayingAPIResponse>('/api/now-playing');
  const { track, isPlaying } = data || { isPlaying: false };

  return (
    <ActivityCard
      title={
        !track
          ? 'Loading…'
          : `Listen to "${track.name}" by "${track.artist}" on Spotify`
      }
      aria-label={
        !track
          ? 'Loading…'
          : `Listen to "${track.name}" by "${track.artist}" on Spotify`
      }
      href={track?.url || '#'}
      target={'_blank'}
      className={cx(loading ? 'motion-safe:animate-pulse' : '')}
    >
      <BackgroundImage
        src={track?.image?.url || ''}
        width={track?.image?.width || 128}
        height={track?.image?.height || 128}
        alt={`Image for album: "${track?.album}" by "${track?.artist}"`}
        className={cx(
          isPlaying
            ? 'motion-safe:animate-spin'
            : loading
              ? 'hidden invisible'
              : '',
        )}
      />
      <Content
        className={cx('safe-blur backdrop-blur-xl backdrop-saturate-200')}
      >
        <Img
          alt={
            !track
              ? 'Loading…'
              : `Album cover: "${track.album}" by "${track.artist}"`
          }
          src={track?.image?.url || ''}
          width={track?.image?.width || 24}
          height={track?.image?.height || 24}
          className={cx(
            'rounded-1 object-cover object-center',
            'aspect-square w-auto h-auto',
            'max-w-full max-h-[72px] tablet-sm:max-h-[78px]',
            'border border-divider',
          )}
        />
        <Texts>
          <Header>
            <span>
              {loading ? 'Loading' : isPlaying ? 'Now Playing' : 'Last Played'}
            </span>
            {isPlaying ? (
              <MusicBarsGroup>
                <MusicBar />
                <MusicBar className={'[animation-delay:-2.2s]'} />
                <MusicBar className={'[animation-delay:-3.7s]'} />
              </MusicBarsGroup>
            ) : null}
          </Header>
          <TrackName className={cx(loading ? 'bg-divider' : '')}>
            {track?.name}
          </TrackName>
          <TrackArtist className={cx(loading ? 'bg-divider' : '')}>
            {track?.artist}
          </TrackArtist>
        </Texts>
      </Content>
    </ActivityCard>
  );
};

export const prerender = false;
