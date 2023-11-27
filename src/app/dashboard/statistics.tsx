import { cx } from 'classix';

import { Heading } from '@/components/core/heading';

import { GitHubStats } from './github-stats';
import { ReactionsStats } from './reactions-stats';
import { SponsorsStats } from './sponsors-stats';
import { ViewsStats } from './views-stats';

export const Statistics = async () => (
  <div className={cx('flex flex-col gap-16')}>
    <Heading $as={'h2'} className={cx('text-xl')}>
      📈&nbsp;&nbsp;Statistics
    </Heading>
    <div
      className={cx(
        'max-w-full',
        'grid grid-cols-1 gap-12',
        'mobile-md:grid-cols-2',
        'tablet-sm:grid-cols-3 tablet-sm:gap-16',
      )}
    >
      <ViewsStats />
      <ReactionsStats />
      <GitHubStats />
      <SponsorsStats />
    </div>
  </div>
);
