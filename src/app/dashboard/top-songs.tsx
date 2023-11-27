import { cx } from 'classix';
import type { Route } from 'next';

import { Img } from '@/components/core/img';
import { Link } from '@/components/core/link';
import { getTopTracks } from '@/lib/spotify';

const TopSongsTable = async () => {
  const topTracks = await getTopTracks();
  if (!topTracks || !topTracks.length) return null;
  return (
    <>
      <p
        className={cx(
          'text-2xs text-secondary-txt px-12 py-8 font-semibold font-manrope',
        )}
      >
        Top five (5) recently played songs
      </p>
      <ol
        title={'List of top five (5) recently played songs'}
        className={cx('list-none flex flex-col')}
      >
        {topTracks.map((track, index) => {
          if (!track) return null;
          return (
            <li key={`track-${index}`}>
              <Link
                title={`Listen to "${track?.name}" by "${track?.artist}" on Spotify`}
                href={(track?.url || '#') as Route}
                className={cx(
                  'group/track',
                  'p-12 block',
                  'w-full no-underline text-inherit',
                  'hocus:!no-underline hocus:!text-secondary-txt',
                  index % 2 === 0
                    ? // eslint-disable-next-line max-len
                      'bg-[rgba(var(--color-inverse)/0.024)] dark:bg-[rgba(var(--color-inverse)/0.064)]'
                    : '',
                )}
              >
                <div className={cx('flex items-center gap-12')}>
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
                        'group-hocus/track:underline group-hocus/track:decoration-wavy',
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
    </>
  );
};

export const TopSongs = () => (
  <div className={cx('flex flex-col')}>
    <TopSongsTable />
    <Link
      title={"Check my playlist 'tunez' on Spotify"}
      href={'https://tunez.jahir.dev'}
      className={cx(
        'text-3xs text-secondary-txt px-12 py-8 hocus:decoration-wavy',
      )}
    >
      Check my playlist &quot;tunez&quot; on Spotify
    </Link>
  </div>
);
