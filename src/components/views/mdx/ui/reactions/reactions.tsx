'use client';

import confetti from 'canvas-confetti';
import { cx } from 'classix';
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
import { useWindowDimensions } from '@/hooks/use-window-dimensions';
import type { ReactionName } from '@/lib/planetscale';
import { useReactions } from '@/providers/reactions';
import { useTheme } from '@/providers/theme';

import { ReactionButton } from './reaction-button';
import { ReactionsGroup } from './reactions.styles';

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
  key: ReactionName,
  isDark: boolean,
): Array<`#${string}`> => {
  switch (key) {
    case 'likes': {
      return [isDark ? '#20BF6B' : '#1A9956'];
    }
    case 'loves': {
      return [isDark ? '#EB3B5A' : '#D43551'];
    }
    case 'awards': {
      return [isDark ? '#F7B731' : '#E1752C'];
    }
    case 'bookmarks': {
      return [isDark ? '#A076D9' : '#8854D0'];
    }
    default: {
      return [isDark ? '#afc2ef' : '#2d52ab'];
    }
  }
};

// eslint-disable-next-line max-lines-per-function
export const Reactions = () => {
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();
  const {
    counters: reactions,
    reacted,
    incrementReaction,
    submitting,
    loading,
  } = useReactions();
  const { isDark } = useTheme();

  const clickReaction = async (
    key: ReactionName,
    // @ts-expect-error Unknown type
    event?: MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    // Do nothing if data has not loaded
    if (loading) return;

    // Do nothing if being submitted to db
    if (submitting) return;

    // Submit reactions in production website only
    // const hostname = window?.location?.hostname || 'localhost';
    // if (hostname !== 'jahir.dev') return;

    const reacted = await incrementReaction?.(key);
    // If reaction was submitted successfully
    if (event && reacted) {
      const x = event.clientX / windowWidth;
      const y = event.clientY / windowHeight;
      confetti({
        ...confettiOptions,
        origin: { x, y },
        colors: getConfettiColor(key, isDark),
      });
    }
  };

  useEffect(() => {
    return () => {
      try {
        confetti.reset();
      } catch (e) {}
    };
  }, []);

  console.error({ reactions, reacted });

  return (
    <ReactionsGroup>
      <ReactionButton
        type={'likes'}
        count={reactions?.['likes']}
        reacted={reacted?.['likes']}
        normalIcon={mdiThumbUpOutline}
        reactedIcon={mdiThumbUp}
        onClick={(e) => {
          clickReaction('likes', e);
        }}
        className={cx(
          '[--reaction-color:26_153_86]',
          'dark:[--reaction-color:32_191_107]',
        )}
        submitting={submitting}
        loading={loading}
      />
      <ReactionButton
        type={'loves'}
        count={reactions?.['loves']}
        reacted={reacted?.['loves']}
        normalIcon={mdiHeartOutline}
        reactedIcon={mdiHeart}
        onClick={(e) => {
          clickReaction('loves', e);
        }}
        className={cx(
          '[--reaction-color:212_53_81]',
          'dark:[--reaction-color:235_59_90]',
        )}
        submitting={submitting}
        loading={loading}
      />
      <ReactionButton
        type={'awards'}
        count={reactions?.['awards']}
        reacted={reacted?.['awards']}
        normalIcon={awardOutline}
        reactedIcon={award}
        onClick={(e) => {
          clickReaction('awards', e);
        }}
        className={cx(
          '[--reaction-color:225_117_44]',
          'dark:[--reaction-color:247_183_49]',
        )}
        submitting={submitting}
        loading={loading}
      />
      <ReactionButton
        type={'bookmarks'}
        count={reactions?.['bookmarks']}
        reacted={reacted?.['bookmarks']}
        normalIcon={mdiBookmarkOutline}
        reactedIcon={mdiBookmark}
        onClick={(e) => {
          clickReaction('bookmarks', e);
        }}
        className={cx(
          '[--reaction-color:136_84_208]',
          'dark:[--reaction-color:160_118_217]',
        )}
        submitting={submitting}
        loading={loading}
      />
    </ReactionsGroup>
  );
};
