import { mdiGithub, mdiTwitter } from '@mdi/js';
import Icon from '@mdi/react';
import tw from 'twin.macro';

import { DashboardCard, DashboardCardProps } from './dashboard-card';

import { Component } from '~/types';

interface CounterProps extends DashboardCardProps {
  count?: number;
  text?: string;
  site: 'twitter' | 'github' | 'stalk';
}

const CounterCard = tw(DashboardCard)`
  flex items-center p-8 pt-6 rounded-md text-text-primary
  [small,svg]:(text-text-secondary)
  hocus:(text-text-primary [small,svg]:(underline text-text-primary))
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
    >
      <CardTexts>
        {count ? (
          <p tw={'text-lg font-manrope font-bold'}>{count}</p>
        ) : undefined}
        {text ? <small tw={'text-xs'}>{text}</small> : undefined}
      </CardTexts>
      <Icon
        path={site === 'twitter' ? mdiTwitter : mdiGithub}
        size={1.35}
        style={{ marginTop: 'auto' }}
      />
    </CounterCard>
  );
};
