import styled from '@emotion/styled';
import { mdiAccountGroup, mdiStar } from '@mdi/js';
import Icon from '@mdi/react';

import { LinkCard } from '~/components/atoms/simple';
import useRequest from '~/hooks/useRequest';
import { Component, GitHubStats as GitHubStatsData } from '~/types';

const GitHubStatsLink = styled(LinkCard)`
  --divider-alpha: 0.32;
  --divider: rgba(var(--divider-opaque), var(--divider-alpha));

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem 0.6rem;
  text-decoration: none;
  color: var(--text-secondary);
  height: 100%;
  min-height: 42px;
  gap: 0.4rem;
  box-shadow: var(--shadow-sm);

  &:hover,
  &:focus {
    --divider-alpha: 0.42;
    box-shadow: var(--shadow);
    color: var(--text-primary);
    border-color: var(--divider);
  }

  .dark & {
    color: var(--text-secondary);

    &:hover,
    &:focus {
      color: var(--text-primary);
    }
  }
`;

const Count = styled.p`
  font-weight: 500;
  margin-left: 0.2rem;
  &:not(:last-of-type) {
    padding-left: 0;
    padding-right: 0.8rem;
    border-right: 1px solid var(--divider);
    margin-left: 0;
    margin-right: 0.4rem;
  }
`;

const iconSize = 0.85;
export const GitHubStats: Component = (props) => {
  const { className } = props;
  const { data } = useRequest<GitHubStatsData>('/api/github');

  if (!data || !data?.success) return <></>;
  return (
    <GitHubStatsLink
      title={"Link to Jahir's GitHub profile"}
      className={className}
      href={'https://github.com/jahirfiquitiva'}
      underline={false}
    >
      <Icon path={mdiStar} size={iconSize} />
      <Count>{data?.stars || 0}</Count>
      <Icon path={mdiAccountGroup} size={iconSize} />
      <Count>{data?.followers || 0}</Count>
    </GitHubStatsLink>
  );
};
