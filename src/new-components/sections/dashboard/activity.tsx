import tw from 'twin.macro';

import { DashboardCard, DashboardCardProps } from './dashboard-card';

import { Image } from '~/new-components/atoms/simple';
import { Component, Activity as ActivityData } from '~/types';

const VSCODE_DISCORD_APP_ID = '782685898163617802';
const VSCODE_2_DISCORD_APP_ID = '810516608442695700';
const INTELLIJ_DISCORD_APP_ID = '626050705526095874';
const codingApps = [
  VSCODE_DISCORD_APP_ID,
  VSCODE_2_DISCORD_APP_ID,
  INTELLIJ_DISCORD_APP_ID,
];

const ActivityCard = tw(DashboardCard)`
  p-8
  flex
  items-end
  gap-8
  truncate
  rounded-md
`;

const ActivityContent = tw.div`
  flex
  items-center
  flex-1
  gap-8
`;

const ActivityTexts = tw.div`
  flex
  flex-col
  flex-1
  [small]:(inline-block)
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
            tw={'rounded'}
          />
        )}
        <ActivityTexts>
          <b>
            {isForCodingApp ? 'Using ' : ''}
            {data?.name}
          </b>
          <small>{data?.details}</small>
          <small tw={'text-text-tertiary'}>{data?.state}</small>
        </ActivityTexts>
      </ActivityContent>
      {data?.smallImage && (
        <Image
          src={data?.smallImage}
          alt={data?.smallImageText}
          size={32}
          layout={'fixed'}
          tw={'rounded-sm'}
        />
      )}
    </ActivityCard>
  );
};
