import { cx } from 'classix';

import { Heading } from '@/components/core/heading';
import { Section } from '@/components/core/section';
import {
  gitHubOutline,
  mdiEyeOutline,
  mdiHeartOutline,
  money,
  star,
} from '@/components/icons';
import { ReactionsStats } from '@/components/views/dashboard/reactions';
import { StatCard } from '@/components/views/dashboard/stat-card';
import { db } from '@/lib/planetscale';
import { getPostsReactions } from '@/lib/reactions';
import { getSponsorsAndCategories } from '@/lib/sponsors/all';
import { getGitHubStats } from '@/lib/stars';
import { getStaticMetadata } from '@/utils/metadata';
import { buildOgImageUrl } from '@/utils/og';

// Update data once per hour
export const revalidate = 3600;

const getPostsViews = async (): Promise<number> => {
  try {
    const data =
      (await db.selectFrom('counters').select(['views']).execute()) || [];
    return (data || []).reduce((p, c) => p + Number(c.views || 0), 0);
  } catch (e) {
    return 0;
  }
};

export default async function DashboardPage() {
  const [views, reactions, sponsors, githubStats] = await Promise.all([
    getPostsViews(),
    getPostsReactions(),
    getSponsorsAndCategories(),
    getGitHubStats(),
  ]);

  return (
    <Section id={'dashboard'}>
      <Heading shadow={'blue'} from={'blue'} to={'green'}>
        Dashboard
      </Heading>
      <div
        className={cx(
          'grid grid-cols-1 gap-10',
          'mobile-md:grid-cols-2 mobile-md:gap-12',
          'tablet-sm:grid-cols-3 tablet-sm:gap-16',
        )}
      >
        <StatCard
          title={'View blog posts'}
          href={'/blog'}
          text={'all-time views'}
          value={views}
          iconPath={mdiEyeOutline}
          color={'#fa8231'}
        />
        <ReactionsStats
          title={'View blog posts'}
          href={'/blog'}
          text={'all-time reactions'}
          value={reactions?.total}
        />
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
        <StatCard
          title={'View sponsors'}
          href={'/donate#thanks'}
          text={'sponsors'}
          value={sponsors?.sponsorsCount}
          iconPath={mdiHeartOutline}
          color={'#c94091'}
        />
        <StatCard
          title={'View sponsors'}
          href={'/donate'}
          text={'earned per month'}
          value={`$${sponsors?.totalEarningsPerMonth || 0}`}
          iconPath={money}
          color={'#26de81'}
        />
      </div>
    </Section>
  );
}

export const metadata = getStaticMetadata({
  title: 'Dashboard – Jahir Fiquitiva',
  description:
    // eslint-disable-next-line max-len
    "Get to know the latest stats and what I'm currently listening to on Spotify",
  exactUrl: 'https://jahir.dev/dashboard',
  keywords: [
    'dashboard',
    'stats',
    'statistics',
    'music',
    'top track',
    'spotify',
    'now playing',
  ],
  image: buildOgImageUrl('dashboard'),
});
