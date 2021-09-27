import styled from '@emotion/styled';
import Icon from '@mdi/react';
import { mdiAccountGroup, mdiStar } from '@mdi/js';
import useRequest from '~/hooks/useRequest';
import { Component } from '~/elements/fc';
import { baseCardStyles, ExtLinkCard } from '~/elements/card';

type GitHubStatsData = {
  success?: boolean;
  stars?: number;
  followers?: number;
};

const GitHubStatsLink = styled.a`
  ${baseCardStyles}
  --divider-alpha: 0.3;
  --divider: rgba(var(--divider-opaque), var(--divider-alpha));
  display: flex;
  align-items: center;
  padding: 0.4rem 0.6rem;
  margin-right: 0.8rem;
  text-decoration: none;
  border: 1px solid var(--divider);
  color: var(--text-secondary);
  min-height: 28px;
  cursor: pointer;

  & * {
    color: var(--text-secondary);
  }

  &:hover,
  &:focus {
    --divider-alpha: 0.4;
    color: var(--text-primary);
    text-decoration: none;
    -webkit-transform: translateY(-.1rem);
    -moz-transform: translateY(-.1rem);
    -ms-transform: translateY(-.1rem);
    -o-transform: translateY(-.1rem);
    transform: translateY(-.1rem);
    & * {
      color: var(--text-primary);
    }
  }

  & svg {
    margin-right: 0.4rem;
    margin-left: 0;

    &:not(:first-child) {
      padding-left: 0.6rem;
      margin-left: 0.6rem;
      border-left: 1px solid var(--divider);
    }
  }
`;

const iconSize = 0.85;
export const GitHubStats: Component = (props) => {
  const { className } = props;
  const { data } = useRequest<GitHubStatsData>('/api/github');

  if (!data || !data?.success) return <></>;
  return (
    <GitHubStatsLink
      className={`nodeco ${className}`}
      href={'https://github.com/jahirfiquitiva'}
      target={'_blank'}
      rel={'noopener noreferrer'}
    >
      <Icon path={mdiStar} size={iconSize} />
      <p>{data?.stars || 0}</p>
      <Icon path={mdiAccountGroup} size={iconSize} />
      <p>{data?.followers || 0}</p>
    </GitHubStatsLink>
  );
};
