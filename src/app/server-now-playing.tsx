import { Suspense } from 'react';

import { FooterNowPlaying } from '@/components/molecules/footer/now-playing';
import { NowPlayingLoading } from '@/components/molecules/footer/now-playing/now-playing.loading';
import { MusicItem } from '@/components/molecules/footer/now-playing/now-playing.styles';
import { getLatestPlayedTrack } from '@/lib/spotify';

// Refresh data every minute
export const revalidate = 60;

const AsyncNowPlaying = async (props: {
  promise?: ReturnType<typeof getLatestPlayedTrack>;
}) => {
  const data = await props.promise;
  return <FooterNowPlaying {...data} />;
};

const ServerNowPlaying = async () => {
  const latestPlayedTrack = getLatestPlayedTrack();
  return (
    <MusicItem>
      <Suspense fallback={<NowPlayingLoading />}>
        {/* @ts-expect-error Server Component */}
        <AsyncNowPlaying promise={latestPlayedTrack} />
      </Suspense>
    </MusicItem>
  );
};

export default ServerNowPlaying;
