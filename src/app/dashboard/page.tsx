import { cx } from 'classix';

import animoji from '@/assets/images/animoji.png';
import { Heading } from '@/components/core/heading';
import { Img } from '@/components/core/img';
import { Section } from '@/components/core/section';
import {
  gitHubOutline,
  mdiEyeOutline,
  mdiHeartOutline,
  money,
  star,
} from '@/components/icons';
import { InstaPhoto } from '@/components/views/dashboard/insta-photo';
import { NowPlaying } from '@/components/views/dashboard/now-playing';
import { ReactionsStats } from '@/components/views/dashboard/reactions';
import { StatCard } from '@/components/views/dashboard/stat-card';
import { StyledStatCard } from '@/components/views/dashboard/stat-card/stat-card.styles';
import { fetchInstaFeed } from '@/lib/instagram';
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
  const [views, reactions, sponsors, githubStats, instagram] =
    await Promise.all([
      getPostsViews(),
      getPostsReactions(),
      getSponsorsAndCategories(),
      getGitHubStats(),
      fetchInstaFeed(),
    ]);

  return (
    <Section id={'dashboard'}>
      <Heading shadow={'blue'} from={'blue'} to={'green'}>
        Dashboard
      </Heading>
      <div
        className={cx(
          'max-w-full',
          'grid grid-cols-2 gap-12',
          'tablet-sm:grid-cols-12 tablet-sm:gap-16',
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
        <NowPlaying />
        <InstaPhoto post={instagram[0]} />
        <StyledStatCard
          title={'More links'}
          href={'https://links.jahir.dev'}
          className={cx(
            'col-span-1',
            'aspect-square tablet-sm:col-span-3',
            'mobile-md:max-w-full group/animoji',
          )}
        >
          <Img
            src={animoji}
            alt={'Animoji of Jahir'}
            className={cx(
              'transition',
              '-rotate-2 -translate-x-2 translate-y-1 m-auto',
              'group-hocus/animoji:transform group-hocus/animoji:-rotate-[8deg]',
            )}
          />
        </StyledStatCard>
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
    'top tracks',
    'spotify',
    'now playing',
    'instagram post',
  ],
  image: buildOgImageUrl('dashboard'),
});
