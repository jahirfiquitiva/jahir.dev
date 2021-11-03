import styled from '@emotion/styled';

import { DashboardCard, DashboardCardProps } from './dashboard-card';

import { Component } from '~/elements/base/fc';
import { Status as StatusData } from '~/types';

interface StatusProps extends DashboardCardProps {
  data?: StatusData;
}

const StatusCard = styled(DashboardCard)`
  & > div {
    padding-bottom: 0.6rem;
  }
`;

const CardContent = styled.div`
  padding-top: 0.2rem;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  & span {
    display: inline-block;
    height: auto;
    opacity: 1;
    color: currentColor;
    fill: currentColor;
    font-size: var(--font-size-xl);
    line-height: 1;
    margin-top: auto;
    padding-bottom: 0.2rem;
  }
`;

const CardTexts = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  & p:last-child {
    margin-bottom: 0;
  }
`;

export const Status: Component<StatusProps> = (props) => {
  const { data, to } = props;

  if (!data) return null;
  return (
    <StatusCard to={to}>
      <CardContent>
        <CardTexts>
          <p className={'link-text'}>Status:</p>
          <p className={'status'}>{data?.status}</p>
        </CardTexts>
        <span>{data?.emoji}</span>
      </CardContent>
    </StatusCard>
  );
};
