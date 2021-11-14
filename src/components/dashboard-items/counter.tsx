import styled from '@emotion/styled';
import { mdiGithub, mdiTwitter } from '@mdi/js';
import Icon from '@mdi/react';

import { DashboardCard, DashboardCardProps } from './dashboard-card';

import { Component } from '~/types';

interface CounterProps extends DashboardCardProps {
  count?: number;
  text?: string;
  site: 'twitter' | 'github';
}

const CardContent = styled.div`
  display: flex;
  align-items: center;

  & svg {
    color: currentColor;
    fill: currentColor;
  }
`;

const CardTexts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;

export const Counter: Component<CounterProps> = (props) => {
  const { count, text, site, href } = props;

  if (!count) return null;
  return (
    <DashboardCard
      title={`Link to ${site === 'twitter' ? 'Twitter' : 'GitHub'}`}
      href={href}
    >
      <CardContent>
        <CardTexts>
          <p className={'count'}>{count}</p>
          <p className={'link-text'}>{text}</p>
        </CardTexts>
        <Icon
          path={site === 'twitter' ? mdiTwitter : mdiGithub}
          size={1.5}
          style={{ marginTop: 'auto' }}
        />
      </CardContent>
    </DashboardCard>
  );
};
