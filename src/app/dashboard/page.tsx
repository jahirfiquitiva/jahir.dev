import { cx } from 'classix';

import animoji from '@/assets/images/animoji.png';
import { Heading } from '@/components/core/heading';
import { Img } from '@/components/core/img';
import { Section } from '@/components/core/section';
import { NowPlaying } from '@/components/views/dashboard/now-playing';
import { StyledStatCard } from '@/components/views/dashboard/stat-card/stat-card.styles';
import { getStaticMetadata } from '@/utils/metadata';
import { buildOgImageUrl } from '@/utils/og';

import { GitHubStats } from './github-stats';
import { InstaPost } from './insta-post';
import { ReactionsStats } from './reactions-stats';
import { SponsorsStats } from './sponsors-stats';
import { ViewsStats } from './views-stats';

export default async function DashboardPage() {
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
        <ViewsStats />
        <ReactionsStats />
        <GitHubStats />
        <SponsorsStats />
        <NowPlaying />
        <InstaPost />
        <StyledStatCard
          title={'More links'}
          href={'https://links.jahir.dev'}
          className={cx(
            'col-span-1 aspect-square',
            'tablet-sm:aspect-square tablet-sm:col-span-3',
            'mobile-md:max-w-full group/animoji',
          )}
        >
          <Img
            src={animoji}
            alt={'Animoji of Jahir'}
            placeholder={'blur'}
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
