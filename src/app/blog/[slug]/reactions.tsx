import { Suspense } from 'react';

import { getCounters, incrementCounter } from '@/actions/counters';
import { ReactionsButtons } from '@/components/ui/blog/reactions';

export const Reactions = async ({ slug }: { slug?: string }) => {
  if (!slug) return null;
  const counters = await getCounters(slug);
  return (
    <Suspense fallback={<div className={'min-h-11 min-w-11'} />}>
      <ReactionsButtons
        slug={slug}
        initialCounters={counters}
        incrementReactionFn={incrementCounter}
      />
    </Suspense>
  );
};
