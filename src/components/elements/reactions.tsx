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
import cn from 'classnames';
import { useEffect, useState } from 'react';

import { ButtonGroup } from '~/components/atoms/complex';
import { OutlinedButton } from '~/components/atoms/simple';
import useRequest from '~/hooks/useRequest';
import { useReactions, ReactionType } from '~/providers/reactions';
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

export const Reactions: Component = () => {
  const { reactions, setReactions, slug } = useReactions();
  const { data } = useRequest<ReactionsType>(`/api/reactions/${slug}`);
  const [state, setState] = useState<ReactionsType>({});

  const clickReaction = (key: ReactionType) => {
    if (reactions[key]) return;

    fetch(`/api/reactions/${slug}`, {
      method: 'POST',
      body: JSON.stringify({ reaction: key }),
    })
      .then((result) => {
        return result.json();
      })
      .then((response) => {
        // console.log(json);
        if (response.success) {
          const newReactions = { ...reactions };
          // eslint-disable-next-line
          newReactions[key] = true;
          // if (setReactions) setReactions(newReactions);
        }
      });
  };

  useEffect(() => {
    setState({ ...data });
  }, [data]);

  if (!data) return null;
  return (
    <ReactionsGroup>
      <ThumbButton
        title={'Like'}
        icon={reactions?.like ? mdiThumbUp : mdiThumbUpOutline}
        iconSize={0.73}
        className={cn({ pressed: reactions?.like })}
        onClick={() => {
          clickReaction('like');
        }}
      >
        {state.likes || '0'}
      </ThumbButton>
      <LoveButton
        title={'Love'}
        icon={reactions?.love ? mdiHeart : mdiHeartOutline}
        iconSize={0.73}
        className={cn({ pressed: reactions?.love })}
        onClick={() => {
          clickReaction('love');
        }}
      >
        {state.loves || '0'}
      </LoveButton>
      <TrophyButton
        title={'Award'}
        icon={reactions?.award ? mdiTrophy : mdiTrophyOutline}
        iconSize={0.73}
        className={cn({ pressed: reactions?.award })}
        onClick={() => {
          clickReaction('award');
        }}
      >
        {state.awards || '0'}
      </TrophyButton>
      <BookmarkButton
        title={'Bookmark'}
        icon={reactions?.bookmark ? mdiBookmark : mdiBookmarkOutline}
        iconSize={0.73}
        className={cn({ pressed: reactions?.bookmark })}
        onClick={() => {
          clickReaction('bookmark');
        }}
      >
        {state.bookmarks || '0'}
      </BookmarkButton>
    </ReactionsGroup>
  );
};
