import { cx } from 'classix';
import type { Route } from 'next';

import { Img } from '@/components/core/img';
import { Link } from '@/components/core/link';
import { getTopTracks, mapTrackData } from '@/lib/spotify';

export const TopSongs = async () => {
  const response = await getTopTracks().catch(null);
  if ('error' in response) return <p>NO TOP SONGS: {response.error.message}</p>;
  return (
    <div className={cx('flex flex-col')}>
      <p className={cx('text-3xs text-secondary-txt')}>Top 5 tracks</p>
      <ol className={cx('list-none flex flex-col')}>
        {response.items.map(mapTrackData).map((track, index) => {
          return (
            <li key={`track-${index}`}>
              <Link
                title={`Listen to "${track?.name}" by "${track?.artist}" on Spotify`}
                href={(track?.url || '#') as Route}
                className={cx(
                  'group/track',
                  'px-8 py-6 block',
                  'w-full no-underline text-inherit',
                  'hocus:!no-underline hocus:!text-secondary-txt',
                  index % 2 === 0
                    ? // eslint-disable-next-line max-len
                      'bg-[rgba(var(--color-inverse)/0.024)] dark:bg-[rgba(var(--color-inverse)/0.032)]'
                    : '',
                )}
              >
                <div className={cx('flex items-center gap-16')}>
                  <Img
                    src={track?.image?.url || ''}
                    alt={''}
                    width={track?.image?.width || 48}
                    height={track?.image?.height || 48}
                    className={cx(
                      'w-48 h-48 object-cover object-center rounded-4',
                    )}
                  />
                  <div className={cx('flex flex-col flex-1')}>
                    <p
                      className={cx(
                        'text-2xs text-primary-txt line-clamp-1',
                        'group-hover/track:underline group-hover/track:decoration-wavy',
                      )}
                    >
                      {track?.name}
                    </p>
                    <p className={cx('text-3xs line-clamp-1')}>
                      {track?.artist}
                    </p>
                  </div>
                  <p className={cx('px-12 py-2 text-center')}>{index + 1}</p>
                </div>
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
};
