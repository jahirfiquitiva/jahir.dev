'use client';

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type PropsWithChildren,
} from 'react';

import { useHasMounted } from '@/hooks/use-has-mounted';
import type { CountersReactions, ReactionName } from '@/lib/planetscale';

type ReactedLocalStorage = { [Key in ReactionName]?: boolean };

export interface ReactionsContextValue {
  counters: CountersReactions;
  reacted?: ReactedLocalStorage;
  incrementReaction?: (reaction: ReactionName) => Promise<boolean>;
  submitting?: boolean;
  loading?: boolean;
}

const defaultContextState: ReactionsContextValue = {
  counters: {},
};

const ReactionsContext =
  createContext<ReactionsContextValue>(defaultContextState);

interface ReactionsProviderProps {
  slug: string;
  inProgress?: boolean;
}

export const ReactionsProvider = (
  props: PropsWithChildren & ReactionsProviderProps,
) => {
  const { slug, inProgress } = props;
  const hasMounted = useHasMounted();

  const [counters, setCounters] = useState<CountersReactions>({});
  const [reacted, setReacted] = useState<ReactedLocalStorage>({});
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch(`/api/reactions/${slug}`)
      .then((req) => req.json())
      .then((res: { counters?: CountersReactions }) => {
        setCounters((previousCounters) => ({
          ...previousCounters,
          ...res.counters,
        }));
      })
      .catch()
      .finally(() => {
        setLoading(false);
      });
  }, [slug]);

  const incrementReaction = useCallback(
    async (reaction: ReactionName) => {
      // Do nothing in SSR or if article is in progress
      // or a reaction has been already submitted
      if (!hasMounted || inProgress || reacted[reaction]) return false;
      setSubmitting(true);

      const request = await fetch(`/api/reactions/${slug}`, {
        method: 'POST',
        body: JSON.stringify({ reaction }),
        headers: { 'Content-Type': 'application/json' },
      });
      const response = await request.json();
      const responseCounters = response.counters as CountersReactions;

      if (Object.keys(responseCounters).length) {
        setCounters((previousCounters) => ({
          ...previousCounters,
          ...response.counters,
        }));

        const newLsState: ReactedLocalStorage = {
          ...reacted,
          [reaction]: true,
        };
        window.localStorage.setItem(slug, JSON.stringify(newLsState));
        setSubmitting(false);
        return true;
      }
      return false;
    },
    [slug, hasMounted, inProgress, reacted],
  );

  useEffect(() => {
    if (!hasMounted) return;
    const stickyValue = window.localStorage.getItem(slug);
    if (stickyValue !== null) setReacted(JSON.parse(stickyValue));
  }, [hasMounted, slug]);

  const { children } = props;

  const contextValue: ReactionsContextValue = {
    counters,
    reacted,
    incrementReaction,
    submitting,
    loading,
  };

  return (
    <ReactionsContext.Provider value={contextValue}>
      {children}
    </ReactionsContext.Provider>
  );
};

export const useReactions = (): ReactionsContextValue => {
  return useContext(ReactionsContext) || defaultContextState;
};
