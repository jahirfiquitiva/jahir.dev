import styled from '@emotion/styled';
import Image from 'next/image';

import { Component, ComponentProps } from '~/elements/base/fc';
import { Chip } from '~/elements/simple/chip';
import Link from '~/new-components/atoms/simple/link';
import { DiscordStatusName } from '~/types';
import buildStyles from '~/utils/build-styles';

const StateContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2.6rem;

  & img {
    background-color: var(--animoji-bg);
    border-radius: 50%;
  }
`;

const StateChip = styled(Chip)`
  --color-values: 75, 101, 132;
  --bg-color: rgba(var(--color-values), 0.1);
  --border-color: rgba(var(--color-values), 0.35);
  text-transform: uppercase;
  margin-top: 0.8rem;
  cursor: pointer;
  color: var(--text-primary);
  font-size: var(--font-size-xxs);
  font-weight: 600;
  font-family: var(--manrope-font);
  letter-spacing: 0.0625rem;

  & > :first-of-type {
    margin-right: 0.6rem;
  }
`;

const StateCircle = styled.span`
  width: 16px;
  height: 16px;
  background-color: rgb(var(--color-values));
  border-radius: 50%;
  animation: pulse-animation 2s infinite;
  margin-right: 0.6rem;

  @keyframes pulse-animation {
    0% {
      box-shadow: 0 0 0 0px rgba(var(--color-values), 0.5);
    }
    100% {
      box-shadow: 0 0 0 8px rgba(var(--color-values), 0);
    }
  }
`;

type StateTextAndColor = {
  text: string;
  color: string;
};

const stateToTextAndColor = (state?: DiscordStatusName): StateTextAndColor => {
  switch (state) {
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
  state?: DiscordStatusName;
}

export const State: Component<StateProps> = (props) => {
  const { state, userId } = props;

  const renderStateChip = () => {
    if (!userId || !state) return null;
    const stateTextAndColor: StateTextAndColor = stateToTextAndColor(state);
    return (
      <Link href={`https://discordapp.com/users/${userId}`} underline={false}>
        <StateChip
          style={buildStyles({ '--color-values': stateTextAndColor.color })}
        >
          <StateCircle />
          {stateTextAndColor.text}
        </StateChip>
      </Link>
    );
  };

  return (
    <StateContainer>
      <Image
        src={'/static/images/jahir/animoji.png'}
        alt={'Image of Jahir as an Animoji'}
        width={144}
        height={144}
        quality={100}
      />
      {renderStateChip()}
    </StateContainer>
  );
};
