import { mdiStarOutline } from '@mdi/js';

import { LinkStatCard } from '@/components/compounds';
import { useRequest } from '@/hooks';
import type { FC } from '@/types';
import { icons } from '@/utils';

export const GitHubStats: FC = () => {
  const { data, loading } = useRequest<{ followers?: number; stars?: number }>(
    '/api/github',
  );
  return (
    <>
      <LinkStatCard
        title={'GitHub'}
        href={'https://github.com/jahirfiquitiva'}
        text={'followers on GitHub'}
        value={`${data?.followers || 'X'}`}
        iconPath={icons.gitHubOutline}
        color={'#4078c0'}
        loading={loading}
      />
      <LinkStatCard
        title={'GitHub Repositories'}
        href={'https://github.com/jahirfiquitiva?tab=repositories'}
        text={'stars on GitHub'}
        value={`${data?.stars || 'X'}`}
        iconPath={mdiStarOutline}
        color={'#f7b731'}
        loading={loading}
      />
    </>
  );
};
