'use client';

import { useEffect } from 'react';

import { useHasMounted } from '@/hooks/use-has-mounted';
import { useImmutableRequest } from '@/hooks/use-request';
import type { Counters } from '@/lib/planetscale';

interface ViewsCounterProps {
  slug: string;
  write?: boolean;
  inProgress?: boolean;
}

export const ViewsCounter = (props: ViewsCounterProps) => {
  const { slug, inProgress, write } = props;
  const hasMounted = useHasMounted();
  const { data } = useImmutableRequest<Counters>(`/api/views/blog--${slug}`);

  useEffect(() => {
    // Do nothing in SSR or if article is in progress
    if (!hasMounted || inProgress || !write) return;

    const hostname = window.location.hostname || 'localhost';
    // Count views in production website only
    if (hostname !== 'jahir.dev') return;

    fetch(`/api/views/${slug}`, {
      method: 'POST',
    }).catch();
  }, [hasMounted, slug, inProgress, write]);

  const { views = 0 } = data || {};
  return (
    <>
      {views > 1 ? (
        <>
          <span aria-hidden={'true'} className={'font-bold'}>
            ·
          </span>
          <span>{views} views</span>
        </>
      ) : null}
    </>
  );
};
