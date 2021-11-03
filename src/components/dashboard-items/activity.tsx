import styled from '@emotion/styled';
import Image from 'next/image';

import { DashboardCard, DashboardCardProps } from './dashboard-card';

import { Component } from '~/elements/base/fc';
import { Activity as ActivityData } from '~/types';
import { calculateTimeSince } from '~/utils/calculate-time-since';
import React, { useEffect, useState } from 'react';

interface ActivityProps extends DashboardCardProps {
  data?: ActivityData;
}

const CardContent = styled.div`
  display: flex;
  align-items: stretch;

  & img {
    border-radius: 4px;
  }

  & img:last-child {
    margin-top: auto;
  }
`;

const CardTexts = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0 0.8rem;

  & p {
    color: var(--text-secondary);
    font-size: var(--font-size-xxs);
    margin: 0;
  }

  & p:first-child {
    color: var(--text-primary);
    font-size: var(--font-size-xs);
    font-weight: 500;
    font-family: var(--manrope);
  }

  & p:nth-child(2) {
    color: var(--text-primary);
  }
`;

const ActivityIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ActivitySmallIconContainer = styled(ActivityIconContainer)`
  align-items: center;
  justify-content: flex-end;
`;

const VSCODE_DISCORD_APP_ID = '782685898163617802';
const INTELLIJ_DISCORD_APP_ID = '626050705526095874';
const codingApps = [VSCODE_DISCORD_APP_ID, INTELLIJ_DISCORD_APP_ID];

export const Activity: Component<ActivityProps> = (props) => {
  const [timeSince, setTimeSince] = useState('');
  const { data, to } = props;

  const isForCodingApp = codingApps.includes(data?.appId || '');

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeSince(calculateTimeSince(data?.startedAt, new Date()) || '');
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [data?.startedAt]);

  const renderTimeText = () => {
    if (!timeSince || !timeSince.length) return null;
    return <p>Elapsed: {timeSince}</p>;
  };

  if (!data) return null;
  return (
    <DashboardCard to={to}>
      <CardContent>
        {data?.largeImage && (
          <ActivityIconContainer>
            <Image
              src={data?.largeImage}
              alt={data?.largeImageText}
              width={64}
              height={64}
            />
          </ActivityIconContainer>
        )}
        <CardTexts>
          <p>
            {isForCodingApp ? 'Using ' : ''}
            {data?.name}
          </p>
          <p>{data?.details}</p>
          <p>{data?.state}</p>
          {renderTimeText()}
        </CardTexts>
        {data?.smallImage && (
          <ActivitySmallIconContainer>
            <Image
              src={data?.smallImage}
              alt={data?.smallImageText}
              width={32}
              height={32}
            />
          </ActivitySmallIconContainer>
        )}
      </CardContent>
    </DashboardCard>
  );
};
