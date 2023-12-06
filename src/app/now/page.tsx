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
  title: 'Now – Jahir Fiquitiva',
  description: "A simple place to share what's been happening recently",
  exactUrl: 'https://jahir.dev/now',
  keywords: [
    'dashboard',
    'stats',
    'statistics',
    'music',
    'top tracks',
    'spotify',
    'now playing',
    'instagram post',
    'now',
  ],
  image: buildOgImageUrl('now'),
});
