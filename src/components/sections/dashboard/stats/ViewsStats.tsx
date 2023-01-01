import { LinkStatCard } from '@/components/compounds';
import { useRequest } from '@/hooks/useRequest';
import { mdiEyeOutline } from '@/icons';
import type { FC } from '@/types';

export const ViewsStats: FC = () => {
  const { data, loading } = useRequest<{ total?: string }>('/api/views');
  return (
    <>
      <LinkStatCard
        title={'View blog posts'}
        href={'/blog'}
        text={'all-time views'}
        value={`${data?.total || '?'}`}
        iconPath={mdiEyeOutline}
        color={'#0abde3'}
        loading={loading}
      />
    </>
  );
};
