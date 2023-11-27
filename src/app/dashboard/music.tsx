import { cx } from 'classix';

import { Heading } from '@/components/core/heading';
import { NowPlaying } from '@/components/views/dashboard/now-playing';

import { TopSongs } from './top-songs';

export const MusicData = () => {
  return (
    <article id={'music'} className={cx('flex flex-col gap-16')}>
      <Heading $as={'h2'} className={cx('text-xl')}>
        Music
      </Heading>
      <div
        className={cx(
          'flex flex-col rounded-8 overflow-hidden border border-divider',
        )}
      >
        <NowPlaying />
        <TopSongs />
      </div>
    </article>
  );
};
