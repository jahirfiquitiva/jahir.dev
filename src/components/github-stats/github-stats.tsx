import styled from '@emotion/styled';
import { mdiAccountGroup, mdiStar } from '@mdi/js';
import Icon from '@mdi/react';

import useRequest from '~/hooks/useRequest';
import { LinkCard } from '~/new-components/atoms/simple';
import {
  Component,
  GitHubStats as GitHubStatsData,
  mediaQueries,
} from '~/types';

const GitHubStatsLink = styled(LinkCard)`
  --divider-alpha: 0.3;
  --divider: rgba(var(--divider-opaque), var(--divider-alpha));
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem 0.6rem;
  margin-right: 0.8rem;
  text-decoration: none;
  border: 1px solid var(--divider);
  color: var(--text-secondary);
  max-height: 42px;
  cursor: pointer;
  width: auto;

  ${mediaQueries.mobile.md} {
    margin-right: 1.2rem;
  }

  & * {
    color: var(--text-secondary);
  }

  &:hover,
  &:focus {
    --divider-alpha: 0.4;
    color: var(--text-primary);
    text-decoration: none;
    -webkit-transform: translateY(-0.1rem);
    -moz-transform: translateY(-0.1rem);
    -ms-transform: translateY(-0.1rem);
    -o-transform: translateY(-0.1rem);
    transform: translateY(-0.1rem);
    & * {
      color: var(--text-primary);
    }
  }

  & p {
    padding-left: 0.2rem;
    &:first-of-type {
      margin-right: 0.6rem;
      padding-right: 0.6rem;
      border-right: 1px solid var(--divider);
    }
  }

  & svg {
    margin-right: 0.4rem;
    margin-left: 0;
    min-width: 24px;
    min-height: 24px;
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
      newTab
    >
      <Icon path={mdiStar} size={iconSize} />
      <p>{data?.stars || 0}</p>
      <Icon path={mdiAccountGroup} size={iconSize} />
      <p>{data?.followers || 0}</p>
    </GitHubStatsLink>
  );
};
