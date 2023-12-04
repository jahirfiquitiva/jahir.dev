import 'server-only';

import Icon from '@mdi/react';
import cx from 'classix';
import { Suspense, cache } from 'react';

import { LineWobble } from '@/components/core/loaders/line-wobble/line-wobble';
import { mdiEyeOutline } from '@/components/icons/mdi';
import { db } from '@/lib/planetscale';

import { Stat, StatBase } from './../stat';
import { trackView as trackViewFunc } from './actions';
import { ViewTracker } from './tracker';

const getViews = cache(async (slug: string): Promise<number> => {
  try {
    const data = await db
      .selectFrom('counters')
      .where('slug', '=', slug)
      .select(['slug', 'views'])
      .execute();
    return Number(data?.[0]?.views || 0);
  } catch (e) {
    return 0;
  }
});

interface ViewsCounterProps {
  slug: string;
  inProgress?: boolean;
  trackView?: boolean;
  $sm?: boolean;
}

// Separated so Suspense actually renders the fallback
const InternalCounter = async (props: { slug: string; $sm?: boolean }) => {
  const views = (await getViews(props.slug).catch(() => 0)) || 1;
  return (
    <StatBase
      $sm={props.$sm}
      className={cx('bg-transparent dark:bg-transparent')}
      title={`This blog post has been viewed ${views.toLocaleString()} times`}
      aria-label={`This blog post has been viewed ${views.toLocaleString()} times`}
    >
      <Icon path={mdiEyeOutline} size={props.$sm ? 0.5 : 0.625} />
      <span>{`${views.toLocaleString()} views`}</span>
    </StatBase>
  );
};

export const ViewsCounter = async (props: ViewsCounterProps) => {
  const { slug, inProgress, trackView, $sm } = props;

  return (
    <>
      {trackView && !inProgress ? (
        <ViewTracker slug={slug} trackView={trackViewFunc} />
      ) : null}
      <Stat $sm={$sm} className={'p-0'}>
        <Suspense
          fallback={
            <StatBase $sm={$sm}>
              <LineWobble
                size={$sm ? 56 : 70}
                lineWeight={$sm ? 2 : 4}
                speed={1.5}
                color={'var(--color-accent, #88a4e6)'}
              />
            </StatBase>
          }
        >
          <InternalCounter slug={slug} $sm={$sm} />
        </Suspense>
      </Stat>
    </>
  );
};
