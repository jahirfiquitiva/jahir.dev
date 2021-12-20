import styled from '@emotion/styled';
import {
  mdiBookmark,
  mdiBookmarkOutline,
  mdiHeart,
  mdiHeartOutline,
  mdiThumbUp,
  mdiThumbUpOutline,
  mdiTrophy,
  mdiTrophyOutline,
} from '@mdi/js';
import confetti from 'canvas-confetti';
import cn from 'classnames';
import React, { useEffect, useState } from 'react';

import { ButtonGroup } from '~/components/atoms/complex';
import { OutlinedButton } from '~/components/atoms/simple';
import useRequest from '~/hooks/useRequest';
import useWindowDimensions from '~/hooks/useWindowDimensions';
import { useReactions, ReactionType } from '~/providers/reactions';
import { useTheme } from '~/providers/theme';
import { Component, mediaQueries, Reactions as ReactionsType } from '~/types';

const ReactionsGroup = styled(ButtonGroup)`
  gap: 0.4rem;

  ${mediaQueries.mobile.lg} {
    gap: 0.6rem;
  }
`;

const ReactButton = styled(OutlinedButton)`
  --reaction-color: var(--card-base);
  order: 2;
  padding: 0.6rem 0.8rem;
  border-radius: 9999px;
  font-size: var(--font-3xs);
  color: var(--text-secondary);
  box-shadow: none;
  background-color: rgba(0, 0, 0, 0);
  gap: 0.4rem;
  line-height: 1;

  ${mediaQueries.mobile.lg} {
    gap: 0.6rem;
  }

  & > span {
    padding-top: 1px;
  }

  & > svg {
    transition: all 0.15s ease-in-out;
  }

  &:hover,
  &:focus {
    transform: none;
    box-shadow: none;
    background-color: rgba(0, 0, 0, 0);
    color: var(--text-primary);
    border-color: rgba(var(--reaction-color), 0.45);
    & > svg {
      color: rgb(var(--reaction-color));
      fill: rgb(var(--reaction-color));
      transform: scale(1.1);
    }
    .dark & {
      background-color: rgba(0, 0, 0, 0);
    }
  }

  &:disabled {
    opacity: 1;
  }

  &.pressed {
    background-color: rgba(var(--reaction-color), 0.06);
    color: var(--text-primary);
    border-color: rgba(var(--reaction-color), 0.45);

    & > svg {
      color: rgb(var(--reaction-color));
      fill: rgb(var(--reaction-color));
      transform: scale(1.05);
    }
  }
`;

const ThumbButton = styled(ReactButton)`
  --reaction-color: 26, 153, 86;

  .dark & {
    --reaction-color: 32, 191, 107;
  }
`;

const LoveButton = styled(ReactButton)`
  --reaction-color: 212, 53, 81;

  .dark & {
    --reaction-color: 235, 59, 90;
  }
`;

const TrophyButton = styled(ReactButton)`
  --reaction-color: 225, 117, 44;

  .dark & {
    --reaction-color: 247, 183, 49;
  }
`;

const BookmarkButton = styled(ReactButton)`
  --reaction-color: 136, 84, 208;

  .dark & {
    --reaction-color: 160, 118, 217;
  }
`;

const confettiOptions = {
  particleCount: 50,
  spread: 60,
  colors: ['#6085de'],
  disableForReducedMotion: true,
  scalar: 0.5,
  gravity: 0.85,
  decay: 0.75,
  ticks: 100,
};

const getConfettiColor = (
  key: ReactionType,
  isDark: boolean,
): Array<`#${string}`> => {
  switch (key) {
    case 'like': {
      return [isDark ? '#20BF6B' : '#1A9956'];
    }
    case 'love': {
      return [isDark ? '#EB3B5A' : '#D43551'];
    }
    case 'award': {
      return [isDark ? '#F7B731' : '#E1752C'];
    }
    case 'bookmark': {
      return [isDark ? '#A076D9' : '#8854D0'];
    }
    default: {
      return [isDark ? '#afc2ef' : '#2d52ab'];
    }
  }
};

export const Reactions: Component = () => {
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();
  const { reactions, setReactions, slug } = useReactions();
  const { isDark } = useTheme();
  const { data } = useRequest<{ counters: ReactionsType }>(
    `/api/reactions/${slug}`,
  );
  const [state, setState] = useState<ReactionsType>({});
  const [submitting, setSubmitting] = useState<boolean>(false);

  const clickReaction = (
    key: ReactionType,
    event?: MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    if (event) {
      const x = event.clientX / windowWidth;
      const y = event.clientY / windowHeight;
      confetti({
        ...confettiOptions,
        origin: { x, y },
        colors: getConfettiColor(key, isDark),
      });
    }
    if (submitting || reactions[key]) return;

    const newReactions = { ...reactions };
    // eslint-disable-next-line
    newReactions[key] = true;
    if (setReactions) setReactions(newReactions);

    const newState = {
      ...state,
    };
    newState[`${key}s`] = (
      BigInt(state[`${key}s`] || 0) + BigInt(1)
    ).toString();
    setState(newState);

    fetch(`/api/reactions/${slug}`, {
      method: 'POST',
      body: JSON.stringify({ reaction: `${key}s` }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((result) => {
        return result.json();
      })
      .then((response) => {
        const newReactions = { ...reactions };
        // eslint-disable-next-line
        newReactions[key] = response.success;
        if (setReactions) setReactions(newReactions);
        setState(response.counters);
        setSubmitting(false);
      })
      .catch(() => {
        setSubmitting(false);
        const newReactions = { ...reactions };
        // eslint-disable-next-line
        newReactions[key] = false;
        if (setReactions) setReactions(newReactions);
      });
  };

  useEffect(() => {
    fetch(`/api/reactions/${slug}`, {
      method: 'POST',
    });
  }, [slug]);

  useEffect(() => {
    if (data) setState(data.counters);
  }, [data]);

  useEffect(() => {
    return () => {
      try {
        confetti.reset();
      } catch (e) {}
    };
  }, [data]);

  if (!data) return null;
  return (
    <ReactionsGroup>
      <ThumbButton
        title={'Like'}
        icon={reactions?.like ? mdiThumbUp : mdiThumbUpOutline}
        iconSize={0.73}
        className={cn({ pressed: reactions?.like })}
        onClick={(e) => {
          clickReaction('like', e);
        }}
      >
        {state.likes || '0'}
      </ThumbButton>
      <LoveButton
        title={'Love'}
        icon={reactions?.love ? mdiHeart : mdiHeartOutline}
        iconSize={0.73}
        className={cn({ pressed: reactions?.love })}
        onClick={(e) => {
          clickReaction('love', e);
        }}
      >
        {state.loves || '0'}
      </LoveButton>
      <TrophyButton
        title={'Award'}
        icon={reactions?.award ? mdiTrophy : mdiTrophyOutline}
        iconSize={0.73}
        className={cn({ pressed: reactions?.award })}
        onClick={(e) => {
          clickReaction('award', e);
        }}
      >
        {state.awards || '0'}
      </TrophyButton>
      <BookmarkButton
        title={'Bookmark'}
        icon={reactions?.bookmark ? mdiBookmark : mdiBookmarkOutline}
        iconSize={0.73}
        className={cn({ pressed: reactions?.bookmark })}
        onClick={(e) => {
          clickReaction('bookmark', e);
        }}
      >
        {state.bookmarks || '0'}
      </BookmarkButton>
    </ReactionsGroup>
  );
};
