import { Suspense } from 'react';

import { getStaticMetadata } from '@/utils/metadata';
import { buildOgImageUrl } from '@/utils/og';

import Loading from '../loading';

import { InstagramFeed } from './insta-feed';
import { MusicData } from './music';
import { Statistics } from './statistics';

export default function DashboardPage() {
  return (
    <Suspense fallback={<Loading />}>
      <Statistics />
      <MusicData />
      <InstagramFeed />
    </Suspense>
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
