import { DashboardCard, DashboardCardProps } from './dashboard-card';

import { Component } from '~/elements/base/fc';

interface CounterProps extends DashboardCardProps {
  count?: number;
  text?: string;
}

export const Counter: Component<CounterProps> = (props) => {
  const { count, text, to } = props;

  if (!count) return null;
  return (
    <DashboardCard to={to}>
      <p className={'count'}>{count}</p>
      <p className={'link-text'}>{text}</p>
    </DashboardCard>
  );
};
