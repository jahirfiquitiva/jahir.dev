import { LinkStatCard } from '@/components/compounds';
import { useRequest } from '@/hooks';
import type { FC } from '@/types';
import { icons } from '@/utils';

export const TwitterStats: FC = () => {
  const { data, loading } = useRequest<{ followers?: number }>('/api/twitter');
  return (
    <>
      <LinkStatCard
        title={'Twitter'}
        href={'https://twitter.com/jahirfiquitiva'}
        text={'followers on Twitter'}
        value={`${data?.followers || 'X'}`}
        iconPath={icons.twitterOutline}
        color={'#1da1f2'}
        loading={loading}
      />
    </>
  );
};
