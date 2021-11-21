import styled from '@emotion/styled';
import { mdiGithub, mdiTwitter } from '@mdi/js';
import Icon from '@mdi/react';

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
  padding: 0.6rem 0.8rem 0.8rem;
  border-radius: 8px;
  color: var(--text-primary);

  & > small,
  & > svg {
    color: var(--text-secondary);
  }

  &:hover,
  &:focus {
    color: var(--text-primary);
    & > small,
    & > svg {
      text-decoration: underline;
      color: var(--text-primary);
    }
  }

  .dark & {
    color: var(--text-primary);
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

const CardTexts = tw.div`
  flex flex-col justify-center flex-1
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
      css={[site === 'stalk' ? tw`pt-8` : null]}
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
