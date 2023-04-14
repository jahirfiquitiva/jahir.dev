'use client';

import { LineWobble } from '@uiball/loaders';
import { useEffect } from 'react';

import { useHasMounted } from '@/hooks/use-has-mounted';
import { useImmutableRequest } from '@/hooks/use-request';
import type { FC } from '@/types';

import { Stat } from './stat';
import { cx } from 'classix';
import Icon from '@mdi/react';
import { mdiEyeOutline } from '@/components/icons';

interface ViewsCounterProps {
  slug: string;
  devToId?: number | string;
  inProgress?: boolean;
  trackView?: boolean;
  $sm?: boolean;
}

export const ViewsCounter: FC<ViewsCounterProps> = (props) => {
  const { slug, devToId, inProgress, trackView, $sm } = props;

  const hasMounted = useHasMounted();
  const { data, loading } = useImmutableRequest<{ total: number }>(
    `/api/views/${slug}?devToId=${devToId}`,
  );
  const views = Number(data?.total || 0);

  useEffect(() => {
    // Do nothing in SSR or if article is in progress
    // or the component should not track view
    if (!hasMounted || inProgress || !trackView) return;

    const hostname = window?.location?.hostname || 'localhost';
    // Count views in production website only
    if (hostname !== 'jahir.dev') return;

    const registerView = () =>
      fetch(`/api/views/${slug}`, {
        method: 'POST',
      }).catch();
    registerView();
  }, [hasMounted, slug, inProgress, trackView]);

  if (loading) {
    return (
      <Stat
        $sm={$sm}
        className={cx($sm ? 'min-w-[58px]' : 'min-w-[64px]', 'h-full')}
      >
        <LineWobble
          size={$sm ? 58 : 64}
          lineWeight={$sm ? 2 : 4}
          speed={1.5}
          color={'var(--color-accent)'}
        />
      </Stat>
    );
  }

  if (views <= 0) return null;
  return (
    <Stat
      $sm={$sm}
      className={cx($sm ? 'min-w-[58px]' : 'min-w-[64px]', 'h-full')}
      title={`This blog post has been viewed ${views.toLocaleString()} times`}
      aria-label={`This blog post has been viewed ${views.toLocaleString()} times`}
    >
      <Icon path={mdiEyeOutline} size={$sm ? 0.5 : 0.625} />
      <span>{`${views.toLocaleString()} views`}</span>
    </Stat>
  );
};
