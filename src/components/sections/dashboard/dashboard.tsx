import styled from '@emotion/styled';

import { DashboardGrid } from './dashboard-grid';
import { Status } from './status';

import { Heading, Divider, CenteredSection } from '~/components/atoms/simple';
import { SongCard } from '~/components/elements';
import { useDashboardData } from '~/hooks/useDashboardData';
import useRequest from '~/hooks/useRequest';
import { Component, mediaQueries, TopTrackData } from '~/types';

const TopTracksContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;

  ${mediaQueries.tablet.sm} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const TopTracksHeading = styled(Heading)`
  margin: 0.6rem 0 1rem;
  font-size: var(--font-sm);
`;

const TopTracksText = styled.p`
  margin-bottom: 1.6rem;
`;

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
      <TopTracksHeading size={'4'}>Top Tracks</TopTracksHeading>
      {renderTopTracks()}
    </CenteredSection>
  );
};
