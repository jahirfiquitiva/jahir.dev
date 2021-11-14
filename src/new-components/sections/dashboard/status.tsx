import tw, { styled } from 'twin.macro';

import { Chip, Image, Link } from '~/new-components/atoms/simple';
import { Component, ComponentProps, DiscordStatusName } from '~/types';
import buildStyles from '~/utils/build-styles';

const StateContainer = tw.div`
  flex
  flex-col
  items-center
  justify-center
  mb-24
`;

const Animoji = tw(Image)`
  rounded-half
  bg-accent-animoji
`;

const BaseStateChip = tw(Chip)`
  --color-values[75, 101, 132]
  --bg-color[rgba(var(--color-values), 0.1)]
  --border-color[rgba(var(--color-values), 0.35)]
  uppercase
  text-tiny
  mt-8
  cursor-pointer
  text-text-primary
  font-semibold
  font-manrope
  tracking-button
`;

const StateChip = styled(BaseStateChip)`
  @keyframes pulse-animation {
    0% {
      box-shadow: 0 0 0 0px rgba(var(--color-values), 0.5);
    }
    100% {
      box-shadow: 0 0 0 8px rgba(var(--color-values), 0);
    }
  }
`;

const StateCircle = tw.span`
  w-10
  h-10
  rounded-half
  mr-8
  background-color[rgb(var(--color-values))]
  animation[pulse-animation 2s infinite]
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
          <span tw={'pt-1'}>{statusTextAndColor.text}</span>
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
      />
      {renderStateChip()}
    </StateContainer>
  );
};
