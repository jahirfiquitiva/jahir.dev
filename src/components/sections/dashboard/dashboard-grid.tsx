import { theme } from 'twin.macro';

import { Activity } from './activity';
import { Counter } from './counter';

import {
  MasonryGrid,
  MasonryBreakpoints,
} from '~/components/atoms/complex';
import { SongCard } from '~/components/elements';
import { Component, ComponentProps, DashboardData } from '~/types';

interface DashboardGridProps extends ComponentProps {
  data?: DashboardData | null;
}

const masonryBreakpoints: MasonryBreakpoints = {};
masonryBreakpoints['0'] = 1;
masonryBreakpoints[theme`screens.md`] = 2;

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
    renderNowPlaying(),
    dashboardData?.activities?.map((activity, index) => {
      return <Activity key={`activity-${index}`} data={activity} />;
    }),
    <Counter
      key={'github-stalk'}
      text={'Stalk my GitHub Activity'}
      site={'stalk'}
      href={'https://gitstalk.netlify.app/jahirfiquitiva'}
    />,
    dashboardData?.counters?.githubFollowers ? (
      <Counter
        key={'github-followers-card'}
        count={dashboardData?.counters?.githubFollowers}
        text={'GitHub Followers'}
        site={'github'}
        href={'https://github.com/jahirfiquitiva'}
      />
    ) : undefined,
    dashboardData?.counters?.githubStars ? (
      <Counter
        key={'github-stars-card'}
        count={dashboardData?.counters?.githubStars}
        text={'GitHub Stars'}
        site={'github'}
        href={'https://github.com/jahirfiquitiva?tab=repositories'}
      />
    ) : undefined,
    dashboardData?.counters?.twitterFollowers ? (
      <Counter
        key={'twitter-followers-card'}
        count={dashboardData?.counters?.twitterFollowers}
        text={'Twitter Followers'}
        site={'twitter'}
        href={'https://twitter.com/intent/user?screen_name=jahirfiquitiva'}
      />
    ) : undefined,
  ]
    .flat()
    .filter((it) => it);

  return (
    <MasonryGrid gap={'1rem'} breakpoints={masonryBreakpoints}>
      {masonryItems}
    </MasonryGrid>
  );
};
