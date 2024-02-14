import { Suspense } from 'react';

import { getCounters, incrementCounter } from '@/actions/counters';
import { ReactionsButtons } from '@/components/ui/blog/reactions';

const Buttons = async ({ slug }: { slug: string }) => {
  const counters = await getCounters(slug);
  return (
    <ReactionsButtons
      slug={slug}
      initialCounters={counters}
      incrementReactionFn={incrementCounter}
    />
  );
};

export const Reactions = ({ slug }: { slug?: string }) => {
  if (!slug) return null;
  return (
    <Suspense fallback={<div className={'min-h-11 min-w-11'} />}>
      <Buttons slug={slug} />
    </Suspense>
  );
};
