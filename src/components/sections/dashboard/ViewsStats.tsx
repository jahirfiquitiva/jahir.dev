import { mdiEyeOutline } from '@mdi/js';

import { LinkStatCard } from '@/components/compounds';
import { useRequest } from '@/hooks';
import type { FC } from '@/types';

export const ViewsStats: FC = () => {
  const { data, loading } = useRequest<{ total?: string }>('/api/views');
  return (
    <>
      <LinkStatCard
        title={'View blog posts'}
        href={'/blog'}
        text={'all-time views'}
        value={`${data?.total || 'X'}`}
        iconPath={mdiEyeOutline}
        color={'#0abde3'}
        loading={loading}
      />
    </>
  );
};
