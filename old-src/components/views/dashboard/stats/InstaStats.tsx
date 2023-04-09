import { LinkStatCard } from '@/old/components/compounds';
import { mdiInstagram } from '@/old/components/icons';
import { useImmutableRequest } from '@/old/hooks/use-request';
import type { FC } from '@/old/types';

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
