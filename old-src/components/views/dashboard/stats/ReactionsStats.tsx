import { LinkStatCard } from '@/old/components/compounds';
import { mdiThumbUpOutline } from '@/old/components/icons';
import { useRequest } from '@/old/hooks/use-request';
import type { FC } from '@/old/types';

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
