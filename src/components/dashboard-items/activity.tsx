import styled from '@emotion/styled';

import { DashboardCard, DashboardCardProps } from './dashboard-card';

import { Component, Activity as ActivityData } from '~/types';
import { Image } from '~/new-components/atoms/simple';

interface ActivityProps extends DashboardCardProps {
  data?: ActivityData;
}

const CardContent = styled.div`
  display: flex;
  align-items: stretch;

  & img {
    border-radius: 4px;
  }

  & img:last-child {
    margin-top: auto;
  }
`;

const CardTexts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;

  &.has-image-left {
    margin-left: 0.8rem;
  }

  &.has-image-right {
    margin-right: 0.8rem;
  }

  & p {
    color: var(--text-secondary);
    font-size: var(--font-size-xxs);
    margin: 0;
  }

  & p:first-child {
    color: var(--text-primary);
    font-size: var(--font-size-xs);
    font-weight: 500;
    font-family: var(--manrope);
  }

  & p:nth-child(2) {
    color: var(--text-primary);
  }
`;

const ActivityIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ActivitySmallIconContainer = styled(ActivityIconContainer)`
  align-items: center;
  justify-content: flex-end;
`;

const VSCODE_DISCORD_APP_ID = '782685898163617802';
const VSCODE_2_DISCORD_APP_ID = '810516608442695700';
const INTELLIJ_DISCORD_APP_ID = '626050705526095874';
const codingApps = [
  VSCODE_DISCORD_APP_ID,
  VSCODE_2_DISCORD_APP_ID,
  INTELLIJ_DISCORD_APP_ID,
];

export const Activity: Component<ActivityProps> = (props) => {
  // const [timeSince, setTimeSince] = useState('');
  const { data, to } = props;

  const isForCodingApp = codingApps.includes(data?.appId || '');

  /*
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeSince(calculateTimeSince(data?.startedAt, new Date()) || '');
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [data?.startedAt]);

  const renderTimeText = () => {
    if (!timeSince || !timeSince.length) return null;
    return <p>Elapsed: {timeSince}</p>;
  };
  */

  if (!data) return null;

  const cardTextsClasses = [
    data?.largeImage ? 'has-image-left' : '',
    data?.smallImage ? 'has-image-right' : '',
  ]
    .join(' ')
    .trim();

  return (
    <DashboardCard to={to}>
      <CardContent>
        {data?.largeImage && (
          <ActivityIconContainer>
            <Image
              src={data?.largeImage}
              alt={data?.largeImageText}
              size={64}
            />
          </ActivityIconContainer>
        )}
        <CardTexts className={cardTextsClasses}>
          <p>
            {isForCodingApp ? 'Using ' : ''}
            {data?.name}
          </p>
          <p>{data?.details}</p>
          <p>{data?.state}</p>
          {/* renderTimeText() */}
        </CardTexts>
        {data?.smallImage && (
          <ActivitySmallIconContainer>
            <Image
              src={data?.smallImage}
              alt={data?.smallImageText}
              width={32}
              height={32}
            />
          </ActivitySmallIconContainer>
        )}
      </CardContent>
    </DashboardCard>
  );
};
