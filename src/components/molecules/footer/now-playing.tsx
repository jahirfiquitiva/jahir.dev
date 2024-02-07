'use client';

import { Icon } from '@/components/atoms/icon';
import { Img } from '@/components/atoms/img';
import { Link } from '@/components/atoms/link';
import { loading as loadingIcon } from '@/components/icons';
import { useRequest } from '@/hooks/use-request';
import type { NowPlayingAPIResponse } from '@/types/spotify/request';
import cx, { tw } from '@/utils/cx';

import { Clock } from './time';

const ScrollingText = tw.span`
  motion-safe:animate-scroll
  motion-safe:[animation-play-state:running]
  group-hocus/music:underline
  group-hocus/music:motion-safe:[animation-play-state:paused]
`;

export const FooterNowPlaying = () => {
  const { data, loading } =
    useRequest<NowPlayingAPIResponse>('/api/now-playing');
  const { track, isPlaying } = data || { isPlaying: false };

  if (loading)
    return <Icon path={loadingIcon} className={'size-5 animate-spin'} />;

  if (!isPlaying || !track) return <Clock />;
  const scrollingText = `${track.name} • ${track.artist}`;
  const animationDuration = scrollingText.length * 0.325;
  return (
    <Link
      title={`Listen to "${track.name}" by "${track.artist}" on Spotify`}
      href={track.url}
      target={'_blank'}
      className={cx(
        'max-w-[28ch] font-normal',
        'flex flex-row items-center gap-2',
        'text-tertiary-txt text-3xs truncate',
        'no-underline group/music',
        'hocus:text-secondary-txt',
        'motion-safe:animate-fade-in',
      )}
      data-umami-event={'Now Playing'}
      data-umami-event-from={'Footer'}
    >
      <Img
        alt={`Album cover: "${track.album}" by "${track.artist}"`}
        src={track.image?.url || ''}
        size={24}
        quality={50}
        className={cx(
          'size-6 rounded-full border border-divider',
          'motion-safe:animate-spin motion-safe:[animation-duration:8s]',
          'group-hocus/music:[animation-play-state:paused]',
        )}
      />
      <div
        className={cx(
          'flex items-center flex-1 gap-6 overflow-x-hidden max-w-full',
          '[mask-repeat:no-repeat] [mask-position:center]',
          // eslint-disable-next-line max-len
          '[mask-image:linear-gradient(90deg,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_20%,rgba(0,0,0,1)_80%,rgba(0,0,0,0)_100%)]',
        )}
        style={{ animationDuration: `${animationDuration}s` }}
      >
        <ScrollingText>{scrollingText}</ScrollingText>
        <ScrollingText aria-hidden={'true'} className={'select-none'}>
          {scrollingText}
        </ScrollingText>
        <ScrollingText aria-hidden={'true'} className={'select-none'}>
          {scrollingText}
        </ScrollingText>
      </div>
    </Link>
  );
};
