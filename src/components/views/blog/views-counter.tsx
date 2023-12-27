import { useEffect } from 'react';

import { LineWobble } from '@/components/loaders/line-wobble/line-wobble';
import { useHasMounted } from '@/hooks/use-has-mounted';
import { useImmutableRequest } from '@/hooks/use-request';

interface ViewsCounterProps {
  slug: string;
  write?: boolean;
}

export const ViewsCounter = (props: ViewsCounterProps) => {
  const endpoint = `/api/counters/blog--${props.slug}`;
  const hasMounted = useHasMounted();
  const { data, loading, error } = useImmutableRequest<{
    counters?: { views?: string };
  }>(endpoint);

  useEffect(() => {
    if (!props.write) return;
    if (!hasMounted) return;
    const hostname = window?.location?.hostname || 'localhost';
    if (hostname !== 'jahir.dev') return;
    try {
      fetch(endpoint, {
        method: 'POST',
        body: JSON.stringify({
          reaction: 'views',
        }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }).catch(null);
    } catch (e) {}
  }, [props.write, endpoint, hasMounted]);

  if (loading) {
    return (
      <LineWobble
        size={52}
        lineWeight={4}
        speed={1.75}
        color={'var(--color-accent, #88a4e6)'}
        className={'ml-1.5'}
      />
    );
  }

  if (!data || error || Number(data.counters?.views || '0') <= 0) return null;
  return (
    <>
      <span aria-hidden={'true'}> • </span>
      <span>{data.counters?.views} views</span>
    </>
  );
};
