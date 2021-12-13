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
    <Counter
      key={'github-stalk'}
      text={'Stalk my GitHub Activity'}
      site={'stalk'}
      href={'https://gitstalk.netlify.app/jahirfiquitiva'}
    />,
  ]
    .flat()
    .filter((it) => it);

  return (
    <Masonry gap={'1rem'} breakpoints={masonryBreakpoints}>
      {masonryItems}
    </Masonry>
  );
};
