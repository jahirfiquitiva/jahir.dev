import { Suspense, cache } from 'react';

import {
  getCounters,
  incrementCounter as incCounter,
} from '@/actions/counters';
import type { Blog } from '@/content';

interface ViewsCounterProps {
  slug: Blog['slug'];
  write?: boolean;
}

const incrementCounter = cache(incCounter);

const Views = async ({ slug, write }: ViewsCounterProps) => {
  const { views = 0 } = await getCounters(slug);
  if (write) incrementCounter(slug, 'views');
  if (views <= 1) return null;
  return (
    <>
      <span aria-hidden={'true'} className={'font-bold'}>
        ·
      </span>
      <span>{views} views</span>
    </>
  );
};

export const ViewsCounter = (props: ViewsCounterProps) => (
  <Suspense>
    <Views {...props} />
  </Suspense>
);
