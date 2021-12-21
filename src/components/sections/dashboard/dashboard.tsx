import styled from '@emotion/styled';

import { DashboardGrid } from './dashboard-grid';
import { Now } from './now';

import { SectionHeading } from '~/components/atoms/complex';
import { Divider, Section } from '~/components/atoms/simple';
import { SongCard } from '~/components/elements';
import { useDashboardData } from '~/hooks/useDashboardData';
import useRequest from '~/hooks/useRequest';
import { Component, mediaQueries, TopTrackData } from '~/types';

const TopTracksContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 1rem;
  margin-bottom: 2.4rem;

  ${mediaQueries.tablet.sm} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const TopTracksHeading = styled(SectionHeading)`
  --text-shadow-size: 1px;
  margin: 0 0 1.2rem;
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
    <>
      <Section id={'now'}>
        <Now />
      </Section>
      <Section id={'dashboard'}>
        <Divider thin />
        <TopTracksHeading size={'4'} emoji={'✨'} shadowColor={'orange'}>
          Right Now
        </TopTracksHeading>
        <DashboardGrid data={dashboardData} />
        <Divider thin />
        <TopTracksHeading size={'4'} emoji={'🎙️'} shadowColor={'blue'}>
          Top Tracks
        </TopTracksHeading>
        {renderTopTracks()}
      </Section>
    </>
  );
};
