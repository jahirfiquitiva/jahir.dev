import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import { Chip, Image, Link } from '~/components/atoms/simple';
import { Component, ComponentProps, DiscordStatusName } from '~/types';
import buildStyles from '~/utils/styles/build-styles';

const StateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2.4rem;
`;

const Animoji = styled(Image)`
  border-radius: 50%;
  background-color: var(--accent-animoji);
`;

const StateChip = styled(Chip)`
  --color-values: 75, 101, 132;
  --bg-color: rgba(var(--color-values), 0.1);
  --border-color: rgba(var(--color-values), 0.35);
  text-transform: uppercase;
  font-size: var(--font-3xs);
  font-weight: 600;
  font-family: var(--manrope-font);
  color: var(--text-primary);
  margin-top: 1rem;
  letter-spacing: 0.03125rem;

  & > span:last-of-type {
    padding-top: 1px;
  }
`;

const pulse = keyframes`
  from {
    box-shadow: 0 0 0 0px rgba(var(--color-values), 0.5);
  }
  to {
    box-shadow: 0 0 0 8px rgba(var(--color-values), 0);
  }
`;

const BaseStateCircle = styled.span`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  margin-right: 0.8rem;
  background-color: rgb(var(--color-values));
  animation-duration: 2s;
  animation-iteration-count: infinite;
`;

const StateCircle = styled(BaseStateCircle)`
  animation-name: ${pulse};
`;

type StateTextAndColor = {
  text: string;
  color: string;
};

const statusToTextAndColor = (
  status?: DiscordStatusName,
): StateTextAndColor => {
  switch (status) {
    case 'idle': {
      return {
        text: 'Away',
        color: '250, 130, 49',
      };
    }
    case 'dnd': {
      return {
        text: 'Do not Disturb',
        color: '235, 59, 90',
      };
    }
    case 'online': {
      return {
        text: 'Online',
        color: '32, 191, 107',
      };
    }
    default: {
      return {
        text: 'Offline',
        color: '75, 101, 132',
      };
    }
  }
};

interface StateProps extends ComponentProps {
  userId?: string;
  status?: DiscordStatusName;
}

export const Status: Component<StateProps> = (props) => {
  const { status, userId } = props;

  const renderStateChip = () => {
    if (!userId || !status) return null;
    const statusTextAndColor: StateTextAndColor = statusToTextAndColor(status);
    return (
      <Link
        title={'Link to Discord profile'}
        href={`https://discordapp.com/users/${userId}`}
        underline={false}
      >
        <StateChip
          style={buildStyles({ '--color-values': statusTextAndColor.color })}
        >
          <StateCircle />
          <span>{statusTextAndColor.text}</span>
        </StateChip>
      </Link>
    );
  };

  return (
    <StateContainer>
      <Animoji
        src={'/static/images/jahir/animoji.png'}
        alt={'Image of Jahir as an Animoji'}
        size={144}
        quality={100}
        priority
      />
      {renderStateChip()}
    </StateContainer>
  );
};
