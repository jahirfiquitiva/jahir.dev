import cx from 'classix';

import { Heading } from '@/components/core/heading';
import { NowPlaying } from '@/components/views/dashboard/now-playing/now-playing';

export const MusicData = () => {
  return (
    <article id={'music'} className={cx('flex flex-col gap-16')}>
      <Heading $as={'h2'} className={cx('text-xl')}>
        Music
      </Heading>
      <div className={cx('grid grid-cols-1 gap-12 mobile-md:grid-cols-2')}>
        <NowPlaying />
        <NowPlaying />
      </div>
    </article>
  );
};
