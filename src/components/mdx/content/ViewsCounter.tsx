import { useEffect } from 'react';

import { useHasMounted, useRequest } from '@/hooks';
import type { FC } from '@/types';

interface ViewsCounterProps {
  slug: string;
  devToId?: number | string;
  inProgress?: boolean;
}

export const ViewsCounter: FC<ViewsCounterProps> = (props) => {
  const { slug, devToId, inProgress } = props;

  const hasMounted = useHasMounted();
  const { data } = useRequest<{ total: number }>(
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

  if (views <= 0) return null;
  return (
    <span>
      {' • '}
      {`${views > 0 ? views.toLocaleString() : '–––'} views`}
    </span>
  );
};
