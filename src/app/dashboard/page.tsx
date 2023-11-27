import { cx } from 'classix';

import { Heading } from '@/components/core/heading';
import { Section } from '@/components/core/section';
import { getStaticMetadata } from '@/utils/metadata';
import { buildOgImageUrl } from '@/utils/og';

import { InstagramFeed } from './insta-feed';
import { MusicData } from './music';
import { Statistics } from './statistics';

export default async function DashboardPage() {
  return (
    <Section id={'dashboard'} className={cx('gap-32 py-8')}>
      <Heading shadow={'blue'} from={'blue'} to={'green'}>
        Dashboard
      </Heading>
      <Statistics />
      <MusicData />
      <InstagramFeed />
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
