import { mdiInstagram } from '@mdi/js';

import { LinkStatCard } from '@/components/compounds';
import { useRequest } from '@/hooks';
import type { FC } from '@/types';

export const InstaStats: FC = () => {
  const { data, loading } = useRequest<{ followers?: number }>(
    '/api/instagram',
  );
  return (
    <>
      <LinkStatCard
        title={'Instagram'}
        href={'https://instagram.com/jahirfiquitiva'}
        text={'followers on Instagram'}
        value={`${data?.followers || 'X'}`}
        iconPath={mdiInstagram}
        color={'#c13584'}
        loading={loading}
      />
    </>
  );
};
