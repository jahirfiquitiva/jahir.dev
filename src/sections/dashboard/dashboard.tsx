import styled from '@emotion/styled';

import { DashboardGrid } from '~/blocks/dashboard-grid';
import { CenteredSection } from '~/blocks/section';
import { SongCard } from '~/components/cards';
import { State } from '~/components/dashboard-items';
import { Heading } from '~/elements/simple/heading';
import { useDashboardData } from '~/hooks/useDashboardData';
import useRequest from '~/hooks/useRequest';
import { Divider } from '~/new-components/atoms/simple';
import { Component, mediaQueries, TopTrackData } from '~/types';

const MusicHeading = styled(Heading)`
  margin-top: 1.6rem;
  margin-bottom: 1rem;
`;

const TopTracksContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  margin-bottom: var(--content-bottom-margin);

  ${mediaQueries.tablet.sm} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const TopTracksText = styled.p`
  margin-bottom: var(--content-bottom-margin);
`;

export const Dashboard: Component = () => {
  const dashboardData = useDashboardData();
  console.log(dashboardData);
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
      <State
        state={dashboardData?.statusName}
        userId={dashboardData?.user?.id}
      />
      <DashboardGrid data={dashboardData} />
      <Divider thin />
      <MusicHeading size={'4'}>Top Tracks</MusicHeading>
      {renderTopTracks()}
    </CenteredSection>
  );
};
