import { LinkStatCard } from '@/components/compounds';
import { useRequest } from '@/hooks/useRequest';
import { mdiThumbUpOutline } from '@/icons';
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
