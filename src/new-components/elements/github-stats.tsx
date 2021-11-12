import { mdiAccountGroup, mdiStar } from '@mdi/js';
import Icon from '@mdi/react';
import tw from 'twin.macro';

import useRequest from '~/hooks/useRequest';
import { LinkCard } from '~/new-components/atoms/simple';
import { Component, GitHubStats as GitHubStatsData } from '~/types';

const GitHubStatsLink = tw(LinkCard)`
  --divider-alpha[0.4]
  --divider[rgba(var(--divider-opaque), var(--divider-alpha))]
  flex
  items-center
  content-center
  py-4 px-6
  mr-8
  no-underline
  text-text-secondary
  h-full
  min-h-button
  gap-4

  sm:(mr-10)
  hocus:(--divider-alpha[0.5] shadow-none text-text-primary border-divider)
`;

const Count = tw.p`font-medium`;

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
      <Count tw={'pr-8 border-divider border-r-1'}>{data?.stars || 0}</Count>
      <Icon path={mdiAccountGroup} size={iconSize} tw={'ml-4'} />
      <Count>{data?.followers || 0}</Count>
    </GitHubStatsLink>
  );
};
