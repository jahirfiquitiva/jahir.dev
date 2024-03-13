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
      <span className={'motion-safe:animate-fade-in'}>{views} views</span>
    </>
  );
};

export const ViewsCounter = (props: ViewsCounterProps) => (
  <Suspense fallback={<span className={'min-w-9 min-h-5'} />}>
    <Views {...props} />
  </Suspense>
);
