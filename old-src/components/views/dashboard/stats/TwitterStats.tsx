import { LinkStatCard } from '@/old/components/compounds';
import { twitterOutline } from '@/old/components/icons';
import { useImmutableRequest } from '@/old/hooks/use-request';
import type { FC } from '@/old/types';

export const TwitterStats: FC = () => {
  const { data, loading } = useImmutableRequest<{ followers?: number }>(
    '/api/twitter',
  );
  return (
    <>
      <LinkStatCard
        title={'Twitter'}
        href={'https://twitter.com/jahirfiquitiva'}
        text={'followers on Twitter'}
        value={`${data?.followers || '?'}`}
        iconPath={twitterOutline}
        color={'#1da1f2'}
        loading={loading}
      />
    </>
  );
};
