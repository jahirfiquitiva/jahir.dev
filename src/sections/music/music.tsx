import styled from '@emotion/styled';

import { CenteredSection } from '~/blocks/section';
import { SongCard } from '~/components/cards';
import { SectionHeading } from '~/components/section-heading';
import { Component } from '~/elements/base/fc';
import { Heading } from '~/elements/simple/heading';
import { useDashboardData } from '~/hooks/useDashboardData';
import useRequest from '~/hooks/useRequest';
import { mediaQueries, TopTrackData } from '~/types';

const MusicHeading = styled(Heading)`
  margin-top: 2.6rem;
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

export const Music: Component = () => {
  const dashboardData = useDashboardData();
  console.log(dashboardData);
  const { data: nowPlayingData, loading: loadingNowPlaying } =
    useRequest<TopTrackData>('/api/now-playing');
  const { data: topTracksData, loading: loadingTopTracks } =
    useRequest<{ tracks?: Array<TopTrackData> }>('/api/top-tracks');

  const renderNowPlaying = () => {
    if (loadingNowPlaying) return <p>Loading...</p>;
    return <SongCard {...nowPlayingData} isForNowPlaying />;
  };

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
      <SectionHeading
        size={'3'}
        shadowColor={'blue'}
        gradientColor={'blue-to-green'}
        emoji={'🎧'}
      >
        Music
      </SectionHeading>

      <MusicHeading size={'4'}>Now Playing</MusicHeading>
      {renderNowPlaying()}

      <MusicHeading size={'4'}>Top Tracks</MusicHeading>
      {renderTopTracks()}
    </CenteredSection>
  );
};
