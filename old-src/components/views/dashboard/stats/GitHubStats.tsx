import { LinkStatCard } from '@/old/components/compounds';
import { mdiStarOutline, gitHubOutline } from '@/old/components/icons';
import { useImmutableRequest } from '@/old/hooks/use-request';
import type { FC } from '@/old/types';

export const GitHubStats: FC = () => {
  const { data, loading } = useImmutableRequest<{
    followers?: number;
    stars?: number;
  }>('/api/github');
  return (
    <>
      <LinkStatCard
        title={'GitHub Repositories'}
        href={'https://github.com/jahirfiquitiva?tab=repositories'}
        text={'stars on GitHub'}
        value={`${data?.stars || '?'}`}
        iconPath={mdiStarOutline}
        color={'#f7b731'}
        loading={loading}
      />
      <LinkStatCard
        title={'GitHub'}
        href={'https://github.com/jahirfiquitiva'}
        text={'followers on GitHub'}
        value={`${data?.followers || '?'}`}
        iconPath={gitHubOutline}
        color={'#4078c0'}
        loading={loading}
      />
    </>
  );
};
