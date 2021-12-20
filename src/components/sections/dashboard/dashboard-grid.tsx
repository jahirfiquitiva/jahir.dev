import { mdiEye, mdiThumbUp } from '@mdi/js';

import { Activity } from './activity';
import { Counter } from './counter';

import { SongCard, Masonry, MasonryBreakpoints } from '~/components/elements';
import { Component, ComponentProps, DashboardData, viewports } from '~/types';

interface DashboardGridProps extends ComponentProps {
  data?: DashboardData | null;
}

const masonryBreakpoints: MasonryBreakpoints = {};
masonryBreakpoints['0'] = 1;
masonryBreakpoints[viewports.tablet.sm] = 2;

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
    dashboardData?.counters?.views ? (
      <Counter
        key={'views-card'}
        count={dashboardData?.counters?.views}
        text={'All-Time Views'}
        site={'jahir'}
        href={'/'}
        iconPath={mdiEye}
      />
    ) : undefined,
    dashboardData?.counters?.reactions ? (
      <Counter
        key={'reactions-card'}
        count={dashboardData?.counters?.reactions}
        text={'All-Time Reactions'}
        site={'jahir'}
        href={'/'}
        iconPath={mdiThumbUp}
      />
    ) : undefined,
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
    <Counter
      key={'github-stalk'}
      text={'Stalk my GitHub Activity'}
      site={'stalk'}
      href={'https://gitstalk.netlify.app/jahirfiquitiva'}
    />,
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
    <Masonry gap={'1rem'} breakpoints={masonryBreakpoints}>
      {masonryItems}
    </Masonry>
  );
};
