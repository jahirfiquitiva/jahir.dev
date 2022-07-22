import { mdiThumbUpOutline } from '@mdi/js';

import { LinkStatCard } from '@/components/compounds';
import { useRequest } from '@/hooks';
import type { FC } from '@/types';

export const ReactionsStats: FC = () => {
  const { data, loading } = useRequest<{ total?: string }>('/api/reactions');
  return (
    <>
      <LinkStatCard
        title={'View blog posts'}
        href={'/blog'}
        text={'all-time reactions'}
        value={`${data?.total || 'X'}`}
        iconPath={mdiThumbUpOutline}
        color={'#fa8231'}
        loading={loading}
      />
    </>
  );
};
