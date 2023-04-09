import { LinkStatCard } from '@/old/components/compounds';
import { mdiEyeOutline } from '@/old/components/icons';
import { useRequest } from '@/old/hooks/use-request';
import type { FC } from '@/old/types';

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
