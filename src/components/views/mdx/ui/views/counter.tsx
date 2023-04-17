import 'server-only';

import Icon from '@mdi/react';
import { LineWobble } from '@uiball/loaders';
import { cx } from 'classix';
import { Suspense, cache } from 'react';

import { mdiEyeOutline } from '@/components/icons';
import { getSingleDevToArticleViews } from '@/lib/devto';
import { db } from '@/lib/planetscale';

import { Stat } from './../stat';
import { trackView as trackViewFunc } from './actions';
import { ViewTracker } from './tracker';

export const getViews = cache(
  async (slug: string, devToId?: string): Promise<number> => {
    const devToCount = await getSingleDevToArticleViews(devToId).catch(() => 0);
    const data = await db
      .selectFrom('counters')
      .where('slug', '=', slug)
      .select(['slug', 'views'])
      .execute();
    return Number(data?.[0]?.views || 0) + devToCount;
  },
);

interface ViewsCounterProps {
  slug: string;
  devToId?: string;
  inProgress?: boolean;
  trackView?: boolean;
  $sm?: boolean;
}

export const ViewsCounter = async (props: ViewsCounterProps) => {
  const { slug, devToId, inProgress, trackView, $sm } = props;
  const views = await getViews(slug, devToId);

  // if (!views) return null;
  return (
    <>
      {trackView && !inProgress ? (
        <ViewTracker slug={slug} trackView={trackViewFunc} />
      ) : null}
      <Stat
        $sm={$sm}
        className={cx($sm ? 'min-w-[58px]' : 'min-w-[64px]', 'h-full')}
        title={`This blog post has been viewed ${views.toLocaleString()} times`}
        aria-label={`This blog post has been viewed ${views.toLocaleString()} times`}
      >
        <Suspense
          fallback={
            <LineWobble
              size={$sm ? 58 : 64}
              lineWeight={$sm ? 2 : 4}
              speed={1.5}
              color={'var(--color-accent)'}
            />
          }
        >
          <>
            <Icon path={mdiEyeOutline} size={$sm ? 0.5 : 0.625} />
            <span>{`${views.toLocaleString()} views`}</span>
          </>
        </Suspense>
      </Stat>
    </>
  );
};
