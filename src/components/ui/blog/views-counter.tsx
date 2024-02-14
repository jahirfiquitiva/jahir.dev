import { Suspense } from 'react';

import { getCounters, incrementCounter } from '@/actions/counters';

interface ViewsCounterProps {
  slug: string;
  write?: boolean;
  inProgress?: boolean;
}

const AsyncViewsCounter = async (props: ViewsCounterProps) => {
  const { slug, inProgress, write } = props;
  const { views = 0 } = inProgress ? {} : await getCounters(slug, 'views');
  if (write) incrementCounter(`blog--${slug}`, 'views');
  return (
    <>
      {views > 1 ? (
        <>
          <span aria-hidden={'true'} className={'font-bold'}>
            ·
          </span>
          <span className={'motion-safe:animate-fade-in'}>{views} views</span>
        </>
      ) : null}
    </>
  );
};

export const ViewsCounter = (props: ViewsCounterProps) => (
  <Suspense fallback={<span className={'min-w-9 min-h-6'} />}>
    <AsyncViewsCounter {...props} />
  </Suspense>
);
