import { gitHubOutline, star } from '@/components/icons/icons';
import { StatCard } from '@/components/views/dashboard/stat-card/stat-card';
import { getGitHubStats } from '@/lib/github';

export const revalidate = 3600;

export const GitHubStats = async () => {
  const githubStats = await getGitHubStats().catch(() => null);
  return (
    <>
      <StatCard
        title={'GitHub Repositories'}
        href={'https://github.com/jahirfiquitiva?tab=repositories'}
        text={'stars on GitHub'}
        value={githubStats?.stars}
        iconPath={star}
        color={'#f7b731'}
      />
      <StatCard
        title={'GitHub'}
        href={'https://github.com/jahirfiquitiva'}
        text={'followers on GitHub'}
        value={githubStats?.followers}
        iconPath={gitHubOutline}
        color={'#4078c0'}
      />
    </>
  );
};
