import { LinkStatCard } from '@/components/compounds';
import { mdiThumbUpOutline } from '@/components/icons';
import { useRequest } from '@/hooks/use-request';
import type { FC } from '@/types';

export const ReactionsStats: FC = () => {
  const { data, loading } = useRequest<{ total?: string }>('/api/reactions');
  return (
    <>
      <LinkStatCard
        title={'View blog posts'}
        href={'/blog'}
        text={'all-time reactions'}
        value={`${data?.total || '?'}`}
        iconPath={mdiThumbUpOutline}
        color={'#fa8231'}
        loading={loading}
      />
    </>
  );
};
