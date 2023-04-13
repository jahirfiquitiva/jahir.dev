'use client';

import Icon from '@mdi/react';
import { Ring } from '@uiball/loaders';
import confetti from 'canvas-confetti';
import { useEffect } from 'react';

import {
  award,
  awardOutline,
  mdiBookmark,
  mdiHeart,
  mdiBookmarkOutline,
  mdiHeartOutline,
  mdiThumbUp,
  mdiThumbUpOutline,
} from '@/components/icons';
import { useHasMounted } from '@/hooks/use-has-mounted';
import { useWindowDimensions } from '@/hooks/use-window-dimensions';
import { type ReactionType, useReactions } from '@/providers/reactions';
import { useTheme } from '@/providers/theme';
import type { FC } from '@/types';

import { ReactionButton, ReactionsGroup } from './reactions.styles';

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

const iconSize = 0.73;
// eslint-disable-next-line max-lines-per-function
export const Reactions: FC<{ inProgress?: boolean }> = (props) => {
  const { inProgress, ...otherProps } = props;
  const hasMounted = useHasMounted();
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();
  const { reactions, incrementReaction, submitting, loading } = useReactions();
  const { isDark } = useTheme();

  const clickReaction = (
    key: ReactionType,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    event?: MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    // Do nothing in SSR or if article is in progress
    if (!hasMounted || inProgress) return;

    // Do nothing if data has not loaded
    if (loading) return;

    // Do nothing if being submitted to db or already pressed
    if (submitting || reactions[key]) return;

    // Submit reactions in production website only
    const hostname = window?.location?.hostname || 'localhost';
    if (hostname !== 'jahir.dev') return;

    if (event) {
      const x = event.clientX / windowWidth;
      const y = event.clientY / windowHeight;
      confetti({
        ...confettiOptions,
        origin: { x, y },
        colors: getConfettiColor(key, isDark),
      });
    }

    incrementReaction?.(key);
  };

  useEffect(() => {
    return () => {
      try {
        confetti.reset();
      } catch (e) {}
    };
  }, []);

  const renderLoaderOrText = (text: string) => {
    return loading ? (
      <Ring
        size={16}
        lineWeight={6}
        speed={2}
        color={'var(--color-tertiary-txt)'}
      />
    ) : (
      text
    );
  };

  if (!reactions && !loading) return null;
  return (
    <ReactionsGroup {...otherProps}>
      <ReactionButton
        outlined
        $reacted={!!reactions?.like}
        disabled={submitting || loading}
        title={'Like'}
        onClick={(e) => {
          clickReaction('like', e);
        }}
      >
        <Icon
          path={reactions?.like ? mdiThumbUp : mdiThumbUpOutline}
          size={iconSize}
        />
        {renderLoaderOrText(reactions.likes || '0')}
      </ReactionButton>
      <ReactionButton
        outlined
        $reacted={!!reactions?.love}
        disabled={submitting || loading}
        title={'Love'}
        onClick={(e) => {
          clickReaction('love', e);
        }}
      >
        <Icon
          path={reactions?.love ? mdiHeart : mdiHeartOutline}
          size={iconSize}
        />
        {renderLoaderOrText(reactions.loves || '0')}
      </ReactionButton>
      <ReactionButton
        outlined
        $reacted={!!reactions?.award}
        disabled={submitting || loading}
        title={'Award'}
        onClick={(e) => {
          clickReaction('award', e);
        }}
      >
        <Icon path={reactions?.award ? award : awardOutline} size={iconSize} />
        {renderLoaderOrText(reactions.awards || '0')}
      </ReactionButton>
      <ReactionButton
        outlined
        $reacted={!!reactions?.bookmark}
        disabled={submitting || loading}
        title={'Bookmark'}
        onClick={(e) => {
          clickReaction('bookmark', e);
        }}
      >
        <Icon
          path={reactions?.bookmark ? mdiBookmark : mdiBookmarkOutline}
          size={iconSize}
        />
        {renderLoaderOrText(reactions.bookmarks || '0')}
      </ReactionButton>
    </ReactionsGroup>
  );
};
