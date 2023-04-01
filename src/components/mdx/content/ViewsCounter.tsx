import { Ring } from '@uiball/loaders';
import { useEffect } from 'react';

import { useHasMounted } from '@/hooks/useHasMounted';
import { useRequest } from '@/hooks/useRequest';
import type { FC } from '@/types';
import { styled } from '~/stitches';

interface ViewsCounterProps {
  slug: string;
  devToId?: number | string;
  inProgress?: boolean;
}

const StyledSpan = styled('span', {
  display: 'inline-flex',
  alignItems: 'center',
  ml: '$6',
  '& > svg': {
    mx: '$6',
  },
});

export const ViewsCounter: FC<ViewsCounterProps> = (props) => {
  const { slug, devToId, inProgress } = props;

  const hasMounted = useHasMounted();
  const { data, loading } = useRequest<{ total: number }>(
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

  if (views <= 0 && !loading) return null;
  return (
    <StyledSpan>
      {' • '}
      {views > 0 ? (
        `${views.toLocaleString()} `
      ) : (
        <Ring
          size={16}
          lineWeight={6}
          speed={2}
          color={'var(--colors-accent-light)'}
        />
      )}
      views
    </StyledSpan>
  );
};