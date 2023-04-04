import { useMemo } from 'react';

import { Masonry, type MasonryBreakpoints } from '@/components/compounds';
import { Heading, Section } from '@/components/core';
import { useActivity } from '@/hooks/useActivity';
import { useNowPlaying } from '@/hooks/useNowPlaying';
import { breakpointsValues } from '@/stitches';
import type { FC } from '@/types';

import { DiscordActivity } from './DiscordActivity';
import { NowPlaying } from './NowPlaying';

const masonryBreakpoints: MasonryBreakpoints = {};
masonryBreakpoints['0'] = 1;
masonryBreakpoints[(breakpointsValues['mobile-sm'] || 0).toString()] = 1;
masonryBreakpoints[(breakpointsValues['tablet-sm'] || 0).toString()] = 2;

export const ActivityGrid: FC = () => {
  const { data: trackData, loading: trackLoading } = useNowPlaying();
  const { data, loading } = useActivity();

  const hasActivity = useMemo(() => {
    if (
      !loading &&
      !trackLoading &&
      !(data?.activities || []).length &&
      (!trackData || !trackData?.isPlaying)
    ) {
      // Make sure there is at least 1 activity or a song playing
      return false;
    }
    return true;
  }, [data, loading, trackData, trackLoading]);

  const renderContent = () => {
    if (loading || trackLoading) return <p>Loading…</p>;
    return (
      <Masonry
        breakpoints={masonryBreakpoints}
        gap={'calc($$verticalContentPadding / 2.5)'}
        css={{ mt: 'calc($$verticalContentPadding / 4)' }}
      >
        <NowPlaying data={trackData} />
        {(data?.activities || []).map((activity) => {
          return <DiscordActivity key={activity.appId} activity={activity} />;
        })}
      </Masonry>
    );
  };

  return (
    <Section
        id={'activity'}
        css={{
          gap: hasActivity ? 0 : 'calc($$verticalContentPadding / 8)',
          px: 0,
        }}
      >
      <Heading as={'h4'}>Activity</Heading>
      {hasActivity ? renderContent() : <p>No activity found at this time…</p>}
    </Section>
  );
};
