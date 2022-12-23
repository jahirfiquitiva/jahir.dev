import { LinkStatCard } from '@/components/compounds';
import { useImmutableRequest } from '@/hooks';
import { mdiInstagram } from '@/icons';
import type { FC } from '@/types';

export const InstaStats: FC = () => {
  const { data, loading } = useImmutableRequest<{ followers?: number }>(
    '/api/insta-followers',
  );
  return (
    <>
      <LinkStatCard
        title={'Instagram'}
        href={'https://instagram.com/jahirfiquitiva'}
        text={'followers on Instagram'}
        value={`${data?.followers || '?'}`}
        iconPath={mdiInstagram}
        color={'#c13584'}
        loading={loading}
      />
    </>
  );
};
