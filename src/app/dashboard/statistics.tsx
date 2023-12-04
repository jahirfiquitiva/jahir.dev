import { cx } from 'classix';
import { Suspense } from 'react';

import { Heading } from '@/components/core/heading';
import { StatCard } from '@/components/views/dashboard/stat-card/stat-card';

import { GitHubStats } from './github-stats';
import { ReactionsStats } from './reactions-stats';
import { SponsorsStats } from './sponsors-stats';
import { ViewsStats } from './views-stats';

const LoadingStatCard = (props: { title?: string }) => {
  return (
    <StatCard
      title={props.title || ''}
      text={'loading…'}
      value={'?'}
      className={'motion-safe:animate-pulse'}
    />
  );
};

export const Statistics = () => (
  <article id={'statistics'} className={cx('flex flex-col gap-16')}>
    <Heading $as={'h2'} className={cx('text-xl')}>
      Stats
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
      <Suspense
        fallback={
          <>
            <LoadingStatCard title={'GitHub'} />
            <LoadingStatCard title={'Sponsors'} />
          </>
        }
      >
        <GitHubStats />
        <SponsorsStats />
      </Suspense>
    </div>
  </article>
);
