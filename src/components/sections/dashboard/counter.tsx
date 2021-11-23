import styled from '@emotion/styled';
import { mdiGithub, mdiTwitter } from '@mdi/js';
import Icon from '@mdi/react';
import cn from 'classnames';

import { DashboardCard, DashboardCardProps } from './dashboard-card';

import { Component } from '~/types';

interface CounterProps extends DashboardCardProps {
  count?: number;
  text?: string;
  site: 'twitter' | 'github' | 'stalk';
}

const CounterCard = styled(DashboardCard)`
  display: flex;
  align-items: center;
  padding: 0.6rem 0.9rem 0.8rem 1rem;
  border-radius: 8px;
  color: var(--text-primary);

  &.stalk {
    padding-top: 0.8rem;
  }

  & small,
  & svg {
    color: var(--text-secondary);
  }

  &:hover,
  &:focus {
    color: var(--text-primary);
    & small,
    & svg {
      text-decoration: underline;
      color: var(--text-primary);
    }
  }

  .dark & {
    color: var(--text-primary);

    &:hover,
    &:focus {
      color: var(--text-primary);
      & small,
      & svg {
        text-decoration: underline;
        color: var(--text-primary);
      }
    }
  }
`;

const Count = styled.p`
  font-size: var(--font-lg);
  font-family: var(--manrope-font);
  font-weight: 700;
`;

const Text = styled.small`
  font-size: var(--font-xs);
`;

const CardTexts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;

export const Counter: Component<CounterProps> = (props) => {
  const { count, text, site, href } = props;

  if (!count && site !== 'stalk') return null;
  return (
    <CounterCard
      title={`Link to ${
        site === 'twitter'
          ? 'Twitter'
          : site === 'github'
          ? 'GitHub'
          : "stalk Jahir's GitHub activity"
      }`}
      href={href}
      underline={false}
      className={cn({ stalk: site === 'stalk' })}
    >
      <CardTexts>
        {count ? <Count>{count}</Count> : undefined}
        {text ? <Text>{text}</Text> : undefined}
      </CardTexts>
      <Icon
        path={site === 'twitter' ? mdiTwitter : mdiGithub}
        size={1.35}
        style={{ marginTop: 'auto' }}
      />
    </CounterCard>
  );
};
