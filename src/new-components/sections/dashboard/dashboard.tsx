import tw from 'twin.macro';

import { DashboardGrid } from './dashboard-grid';
import { Status } from './status';

import { useDashboardData } from '~/hooks/useDashboardData';
import useRequest from '~/hooks/useRequest';
import {
  Heading,
  Divider,
  CenteredSection,
} from '~/new-components/atoms/simple';
import { SongCard } from '~/new-components/elements';
import { Component, TopTrackData } from '~/types';

const TopTracksContainer = tw.div`
  grid
  grid-cols-1
  gap-10
  mb-20
  md:(grid-cols-2)
`;

const TopTracksText = tw.p`mb-16`;

export const Dashboard: Component = () => {
  const dashboardData = useDashboardData();

  const { data: topTracksData, loading: loadingTopTracks } =
    useRequest<{ tracks?: Array<TopTrackData> }>('/api/top-tracks');

  const renderTopTracks = () => {
    if (loadingTopTracks) return <TopTracksText>Loading...</TopTracksText>;
    if ((topTracksData?.tracks?.length || 0) <= 0) {
      return <TopTracksText>No data available at this moment</TopTracksText>;
    }
    return (
      <TopTracksContainer>
        {topTracksData?.tracks?.map((track, i) => {
          return <SongCard key={i} {...track} />;
        })}
      </TopTracksContainer>
    );
  };

  return (
    <CenteredSection id={'music'}>
      <Status
        status={dashboardData?.statusName}
        userId={dashboardData?.user?.id}
      />
      <DashboardGrid data={dashboardData} />
      <Divider thin />
      <Heading size={'4'} tw={'mt-6 mb-10'}>
        Top Tracks
      </Heading>
      {renderTopTracks()}
    </CenteredSection>
  );
};
