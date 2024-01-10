'use client';

import confetti from 'canvas-confetti';
import { useCallback, useEffect, useState, type MouseEvent } from 'react';

import { getReactions, incrementReaction } from '@/actions/reactions';
import { useHasMounted } from '@/hooks/use-has-mounted';
import { useWindowDimensions } from '@/hooks/use-window-dimensions';
import type { ReactionName, ReactionsCounters } from '@/lib/planetscale';

import { confettiOptions, reactionsSetup } from './reaction-button.config';

type ReactedLocalStorage = { [Key in ReactionName]?: boolean };

export const useReactions = (slug: string) => {
  const hasMounted = useHasMounted();
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();

  const [submitting, setSubmitting] = useState<ReactionName | undefined>(
    undefined,
  );
  const [loading, setLoading] = useState<boolean>(true);

  const [counters, setCounters] = useState<ReactionsCounters>({});
  const [reacted, setReacted] = useState<ReactedLocalStorage>({});

  useEffect(() => {
    if (!hasMounted) return;
    // Get reactions counters
    getReactions(slug)
      .then((reactions) => {
        setCounters((previousCounters) => ({
          ...previousCounters,
          ...reactions,
        }));
      })
      .catch()
      .finally(() => {
        setLoading(false);
      });
    // Get if has reacted before (locally)
    const data = window.localStorage.getItem(slug);
    if (data) {
      try {
        const json = JSON.parse(data) as ReactedLocalStorage;
        setReacted(json);
      } catch (e) {}
    }
    // Cleanup confetti
    return () => {
      try {
        confetti.reset();
      } catch (e) {}
    };
  }, [hasMounted, slug]);

  const submitReaction = useCallback(
    async (reaction: ReactionName) => {
      // Do nothing in SSR or a reaction has been already submitted
      if (!hasMounted || submitting || reacted[reaction]) return false;
      setSubmitting(reaction);
      let success = false;
      try {
        const newReactions = await incrementReaction(slug, reaction);
        if (Object.keys(newReactions).length) {
          setCounters((previousCounters) => ({
            ...previousCounters,
            ...newReactions,
          }));
          const newLsState: ReactedLocalStorage = {
            ...reacted,
            [reaction]: true,
          };
          window.localStorage.setItem(slug, JSON.stringify(newLsState));
          setReacted(newLsState);
          success = true;
        }
      } catch (e) {}
      setSubmitting(undefined);
      return success;
    },
    [hasMounted, reacted, submitting, slug],
  );

  const onButtonClick = async (
    event: MouseEvent<HTMLButtonElement>,
    reaction: ReactionName,
  ) => {
    const hostname = window?.location?.hostname || 'localhost';
    const shouldRecordReaction = hostname === 'jahir.dev';

    const reacted = shouldRecordReaction
      ? await submitReaction?.(reaction)
      : true;
    // If reaction was submitted successfully
    if (event && reacted) {
      const x = event.clientX / windowWidth;
      const y = event.clientY / windowHeight;
      confetti({
        ...confettiOptions,
        origin: { x, y },
        colors: [reactionsSetup[reaction].color],
      });
    }
  };

  return { onButtonClick, submitting, loading, reacted, counters };
};
