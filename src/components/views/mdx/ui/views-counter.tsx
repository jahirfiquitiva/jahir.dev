'use client';

import { LineWobble } from '@uiball/loaders';
import { useEffect } from 'react';

import { useHasMounted } from '@/hooks/use-has-mounted';
import { useImmutableRequest } from '@/hooks/use-request';
import type { FC } from '@/types';

import { Stat } from './stat';

interface ViewsCounterProps {
  slug: string;
  devToId?: number | string;
  inProgress?: boolean;
}
export const ViewsCounter: FC<ViewsCounterProps> = (props) => {
  const { slug, devToId, inProgress } = props;

  const hasMounted = useHasMounted();
  const { data, loading } = useImmutableRequest<{ total: number }>(
    `/api/views/${slug}?devToId=${devToId}`,
  );
  const views = Number(data?.total || 0);

  useEffect(() => {
    // Do nothing in SSR or if article is in progress
    if (!hasMounted || inProgress) return;

    const hostname = window?.location?.hostname || 'localhost';
    // Count views in production website only
    if (hostname !== 'jahir.dev') return;

    const registerView = () =>
      fetch(`/api/views/${slug}`, {
        method: 'POST',
      });
    registerView();
  }, [hasMounted, slug, inProgress]);

  if (loading) {
    return (
      <Stat className={'min-w-[68px]'}>
        <LineWobble
          size={64}
          lineWeight={4}
          speed={1.5}
          color={'var(--color-accent)'}
        />
      </Stat>
    );
  }

  if (views <= 0) return null;
  return (
    <Stat
      title={`This blog post has been viewed ${views.toLocaleString()} times`}
      aria-label={`This blog post has been viewed ${views.toLocaleString()} times`}
    >
      {`${views.toLocaleString()} views`}
    </Stat>
  );
};
