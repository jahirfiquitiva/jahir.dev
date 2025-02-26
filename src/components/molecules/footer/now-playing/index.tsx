'use client';

import local from '@/assets/images/local-music.jpg';
import tunez from '@/assets/images/tunez.png';
import { Icon } from '@/components/atoms/icon';
import { loading as loadingIcon } from '@/components/icons';
import { useRequest } from '@/hooks/use-request';
import type { NowPlayingAPIResponse } from '@/types/spotify/request';

import {
  NowPlayingAlbumCover,
  NowPlayingLink,
  NowPlayingTextsContainer,
  ScrollingText,
} from './now-playing.styles';
import { Clock } from './time';

export const FooterNowPlaying = () => {
  const { data, loading } =
    useRequest<NowPlayingAPIResponse>('/api/now-playing');
  const { track, isPlaying } = data || { isPlaying: false };

  if (loading)
    return <Icon path={loadingIcon} className={'size-5 animate-spin'} />;

  if (!isPlaying || !track) return <Clock />;
  const scrollingText = `${track.name} by ${track.artist || 'unknown'}`;
  const animationDuration = scrollingText.length * 0.35;
  return (
    <NowPlayingLink
      title={`Listen to "${track.name}" by "${track.artist || 'unknown'}"`}
      href={track.url || 'https://tunez.jahir.dev'}
      target={'_blank'}
      data-umami-event={'Now Playing'}
      data-umami-event-from={'Footer'}
      style={{ maxWidth: '28ch' }}
    >
      <NowPlayingAlbumCover
        alt={
          track.local
            ? 'Image of a disc'
            : `Album cover for "${track.album}" by "${track.artist || 'unknown'}"`
        }
        src={track.local ? local : (track.image?.url ?? tunez)}
        width={24}
        height={24}
        quality={50}
      />
      <NowPlayingTextsContainer
        style={{ animationDuration: `${animationDuration}s` }}
      >
        <ScrollingText>{scrollingText}</ScrollingText>
        <ScrollingText aria-hidden={'true'} className={'select-none'}>
          {scrollingText}
        </ScrollingText>
        <ScrollingText aria-hidden={'true'} className={'select-none'}>
          {scrollingText}
        </ScrollingText>
      </NowPlayingTextsContainer>
    </NowPlayingLink>
  );
};
