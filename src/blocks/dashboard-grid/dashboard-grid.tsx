import { SongCard } from '~/components/cards';
import { Status } from '~/components/dashboard-items';
import { Counter } from '~/components/dashboard-items/counter';
import { Component, ComponentProps } from '~/elements/base/fc';
import {
  MasonryGrid,
  MasonryBreakpoints,
} from '~/elements/complex/masonry-grid';
import { DashboardData, viewports } from '~/types';

interface DashboardGridProps extends ComponentProps {
  data?: DashboardData | null;
}

const masonryBreakpoints: MasonryBreakpoints = {};
masonryBreakpoints[viewports.default] = 1;
masonryBreakpoints[viewports.mobile.lg] = 2;

export const DashboardGrid: Component<DashboardGridProps> = (props) => {
  const { data: dashboardData } = props;

  const renderNowPlaying = () => {
    if (!dashboardData?.nowPlaying) return null;
    return (
      <SongCard
        key={'currently-playing-card'}
        {...dashboardData?.nowPlaying}
        isForNowPlaying
      />
    );
  };

  const masonryItems = [
    dashboardData?.status?.status ? (
      <Status key={'status-card'} data={dashboardData?.status} />
    ) : undefined,
    renderNowPlaying(),
    dashboardData?.counters?.githubFollowers ? (
      <Counter
        key={'github-followers-card'}
        count={dashboardData?.counters?.githubFollowers}
        text={'GitHub Followers'}
        to={'https://github.com/jahirfiquitiva'}
      />
    ) : undefined,
    dashboardData?.counters?.githubStars ? (
      <Counter
        key={'github-stars-card'}
        count={dashboardData?.counters?.githubStars}
        text={'GitHub Stars'}
        to={'https://github.com/jahirfiquitiva?tab=repositories'}
      />
    ) : undefined,
    dashboardData?.counters?.twitterFollowers ? (
      <Counter
        key={'twitter-followers-card'}
        count={dashboardData?.counters?.twitterFollowers}
        text={'Twitter Followers'}
        to={'https://twitter.com/intent/user?screen_name=jahirfiquitiva'}
      />
    ) : undefined,
  ].filter((it) => it);

  return (
    <MasonryGrid gap={'1rem'} breakpoints={masonryBreakpoints}>
      {masonryItems}
    </MasonryGrid>
  );
};
