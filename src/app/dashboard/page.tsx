import { Heading } from '@/components/core/heading';
import { Section } from '@/components/core/section';
import {
  gitHubOutline,
  mdiHeartOutline,
  money,
  star,
} from '@/components/icons';
import { StatCard } from '@/components/views/dashboard/stat-card';
import { getSponsorsAndCategories } from '@/lib/sponsors/all';
import { getGitHubStats } from '@/lib/stars';
import { getStaticMetadata } from '@/utils/metadata';
import { buildOgImageUrl } from '@/utils/og';
import { cx } from 'classix';

// Update sponsors once per hour
export const revalidate = 3600;

export default async function DashboardPage() {
  const sponsors = await getSponsorsAndCategories().catch(null);
  const githubStats = await getGitHubStats();

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
          title={'GitHub Repositories'}
          href={'https://github.com/jahirfiquitiva?tab=repositories'}
          text={'stars on GitHub'}
          value={githubStats.stars}
          iconPath={star}
          color={'#f7b731'}
        />
        <StatCard
          title={'GitHub'}
          href={'https://github.com/jahirfiquitiva'}
          text={'followers on GitHub'}
          value={githubStats.followers}
          iconPath={gitHubOutline}
          color={'#4078c0'}
        />
        <StatCard
          title={'View sponsors'}
          href={'/donate#thanks'}
          text={'sponsors'}
          value={sponsors.sponsorsCount}
          iconPath={mdiHeartOutline}
          color={'#c94091'}
        />
        <StatCard
          title={'View sponsors'}
          href={'/donate'}
          text={'earned per month'}
          value={`$${sponsors.totalEarningsPerMonth || 0}`}
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
