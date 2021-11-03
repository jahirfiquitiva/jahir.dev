import { DashboardCard, DashboardCardProps } from './dashboard-card';

import { Component } from '~/elements/base/fc';
import { Status as StatusData } from '~/types';

interface StatusProps extends DashboardCardProps {
  data?: StatusData;
}

export const Status: Component<StatusProps> = (props) => {
  const { data, to } = props;

  if (!data) return null;
  return (
    <DashboardCard to={to}>
      <p className={'status'}>{data?.status}</p>
      <p className={'link-text'}>Status: {data?.emoji}</p>
    </DashboardCard>
  );
};
