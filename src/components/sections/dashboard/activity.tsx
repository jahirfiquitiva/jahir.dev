import styled from '@emotion/styled';

import { DashboardCard, DashboardCardProps } from './dashboard-card';

import { Image } from '~/components/atoms/simple';
import { Component, Activity as ActivityData } from '~/types';

const VSCODE_DISCORD_APP_ID = '782685898163617802';
const VSCODE_2_DISCORD_APP_ID = '810516608442695700';
const INTELLIJ_DISCORD_APP_ID = '626050705526095874';
const codingApps = [
  VSCODE_DISCORD_APP_ID,
  VSCODE_2_DISCORD_APP_ID,
  INTELLIJ_DISCORD_APP_ID,
];

const ActivityCard = styled(DashboardCard)`
  padding: 0.8rem;
  display: flex;
  align-items: flex-end;
  gap: 0.8rem;
  max-width: 100%;
  border-radius: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  & span > img {
    border-radius: 4px;
  }
`;

const ActivityContent = styled(ActivityCard)`
  border-radius: 0;
  border: none;
  padding: 0;
  align-items: center;
  flex: 1;
  & span > img {
    border-radius: 6px;
  }
`;

const ActivityTexts = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  & > small {
    display: inline-block;
    &:last-of-type {
      color: var(--text-tertiary);
    }
  }
`;

interface ActivityProps extends DashboardCardProps {
  data?: ActivityData;
}

export const Activity: Component<ActivityProps> = (props) => {
  const { data, href } = props;

  if (!data) return null;
  const isForCodingApp = codingApps.includes(data?.appId || '');
  return (
    <ActivityCard href={href}>
      <ActivityContent>
        {data?.largeImage && (
          <Image
            src={data?.largeImage}
            alt={data?.largeImageText}
            size={64}
            layout={'fixed'}
          />
        )}
        <ActivityTexts>
          <b>
            {isForCodingApp ? 'Using ' : ''}
            {data?.name}
          </b>
          <small>{data?.details}</small>
          <small>{data?.state}</small>
        </ActivityTexts>
      </ActivityContent>
      {data?.smallImage && (
        <Image
          src={data?.smallImage}
          alt={data?.smallImageText}
          size={32}
          layout={'fixed'}
        />
      )}
    </ActivityCard>
  );
};
