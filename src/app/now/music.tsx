import cx from 'classix';

import { Heading } from '@/components/core/heading';
import { NowPlaying } from '@/components/views/dashboard/now-playing/now-playing';
import { TunezCard } from '@/components/views/dashboard/now-playing/tunez';

export const MusicData = () => {
  return (
    <article id={'music'} className={cx('flex flex-col gap-16')}>
      <Heading $as={'h2'} className={cx('text-xl')}>
        Music
      </Heading>
      <div
        className={cx(
          'grid grid-cols-1 gap-12',
          'tablet-sm:grid-cols-2 tablet-sm:gap-16',
        )}
      >
        <NowPlaying />
        <TunezCard />
      </div>
    </article>
  );
};
