import styled from '@emotion/styled';
import { mdiGithub, mdiTwitter } from '@mdi/js';
import Icon from '@mdi/react';
import cn from 'classnames';
import { useMemo } from 'react';

import { DashboardCard, DashboardCardProps } from './dashboard-card';

import { Component } from '~/types';

type SiteOptions = 'twitter' | 'github' | 'stalk' | 'jahir' | 'other';

interface CounterProps extends DashboardCardProps {
  count?: number | string;
  text?: string;
  site: SiteOptions;
  title?: string;
  iconPath?: string;
}

const CounterCard = styled(DashboardCard)`
  display: flex;
  align-items: center;
  padding: 0.6rem 0.8rem 0.8rem;
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
  font-size: var(--font-md);
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

const getCardTitle = (site: SiteOptions, custom?: string | null) => {
  switch (site) {
    case 'twitter': {
      return 'Twitter';
    }
    case 'github': {
      return 'GitHub';
    }
    case 'stalk': {
      return "stalk Jahir's GitHub activity";
    }
    case 'jahir': {
      return 'home page';
    }
    default: {
      return custom || 'unknown site';
    }
  }
};

export const Counter: Component<CounterProps> = (props) => {
  const { count, text, site, title, href, iconPath } = props;

  const cardTitle = useMemo<string>(() => {
    return getCardTitle(site, title);
  }, [site, title]);

  if (!count && site !== 'stalk') return null;
  return (
    <CounterCard
      title={cardTitle}
      href={href}
      underline={false}
      className={cn({ stalk: site === 'stalk' })}
    >
      <CardTexts>
        {count ? <Count>{count}</Count> : undefined}
        {text ? <Text>{text}</Text> : undefined}
      </CardTexts>
      <Icon
        path={
          iconPath?.length
            ? iconPath
            : site === 'twitter'
            ? mdiTwitter
            : mdiGithub
        }
        size={1}
        style={{ marginTop: 'auto' }}
      />
    </CounterCard>
  );
};
