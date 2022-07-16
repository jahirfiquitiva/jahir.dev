import { useEffect } from 'react';

import { useHasMounted } from '@/hooks';
import useRequest from '@/hooks/useRequest';
import type { FC } from '@/types';

interface ViewsCounterProps {
  slug: string;
  devToId?: number | string;
}

export const ViewsCounter: FC<ViewsCounterProps> = (props) => {
  const { slug, devToId } = props;

  const hasMounted = useHasMounted();
  const { data } = useRequest<{ total: number }>(
    `/api/views/${slug}?devToId=${devToId}`,
  );
  const views = Number(data?.total || 0);

  useEffect(() => {
    if (!hasMounted) return;

    const hostname = window?.location?.hostname || 'localhost';
    // Count views in production website only
    if (hostname !== 'jahir.dev') return;

    const registerView = () =>
      fetch(`/api/views/${slug}`, {
        method: 'POST',
      });
    registerView();
  }, [hasMounted, slug]);

  if (views <= 0) return null;
  return (
    <span>
      {' • '}
      {`${views > 0 ? views.toLocaleString() : '–––'} views`}
    </span>
  );
};
