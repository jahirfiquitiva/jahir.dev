'use client';

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useReducer,
  useCallback,
} from 'react';

import { useHasMounted } from '@/hooks/use-has-mounted';
import { useImmutableRequest } from '@/hooks/use-request';
import type { CountersReactions, ReactionName } from '@/lib/planetscale';
import type { FC } from '@/types';

export type ReactionLocalStorage = { [Key in ReactionName]?: boolean };

export type ReactionType = keyof ReactionLocalStorage;
type InternalReactionType = ReactionType | 'ls';

interface ReactionAction {
  type: InternalReactionType;
  payload: ReactionLocalStorage;
}

export type ContextReactions = ReactionLocalStorage & CountersReactions;

export interface ReactionsContextValue {
  slug: string;
  reactions: ContextReactions;
  incrementReaction?: (reaction: ReactionType) => Promise<boolean>;
  submitting?: boolean;
  loading?: boolean;
}

const defaultContextState: ReactionsContextValue = {
  slug: '',
  reactions: {},
};

const ReactionsContext =
  createContext<ReactionsContextValue>(defaultContextState);

const reactionsReducer = (
  state: ReactionLocalStorage,
  action: ReactionAction,
) => {
  if (action.type === 'ls') return { ...state, ...action.payload };
  const copy = { ...state };
  copy[action.type] = true;
  return copy;
};

interface ReactionsProviderProps {
  slug: string;
  inProgress?: boolean;
}

export const ReactionsProvider: FC<ReactionsProviderProps> = (props) => {
  const { slug, inProgress } = props;
  const hasMounted = useHasMounted();
  const [lsState, dispatch] = useReducer(reactionsReducer, {});

  const [state, setState] = useState<CountersReactions>({});
  const [submitting, setSubmitting] = useState<boolean>(false);

  const { data: remoteReactions, loading } = useImmutableRequest<{
    counters: CountersReactions;
  }>(`/api/reactions/${slug}`);

  const incrementReaction = useCallback(
    async (reaction: ReactionType) => {
      if (inProgress) return;
      setSubmitting(true);

      const newState = { ...state };
      newState[reaction] = (state[reaction] || 0) + 1;
      setState(newState);

      const request = await fetch(`/api/reactions/${slug}`, {
        method: 'POST',
        body: JSON.stringify({ reaction }),
        headers: { 'Content-Type': 'application/json' },
      });
      const response = await request.json();

      setState(response.counters);

      const newLsState: ReactionLocalStorage = { ...lsState };
      newLsState[reaction] = response?.success || false;
      window.localStorage.setItem(slug, JSON.stringify(newLsState));
      dispatch({ type: 'ls', payload: newLsState });
      setSubmitting(false);
      return response?.success || false;
    },
    [slug, lsState, state, inProgress],
  );

  useEffect(() => {
    if (remoteReactions) setState(remoteReactions.counters);
  }, [remoteReactions]);

  useEffect(() => {
    if (!hasMounted) return;
    const stickyValue = window.localStorage.getItem(slug);
    if (stickyValue !== null) {
      dispatch({ type: 'ls', payload: JSON.parse(stickyValue) });
    }
  }, [hasMounted, slug]);

  const { children } = props;

  const contextValue: ReactionsContextValue = {
    slug,
    reactions: { ...lsState, ...state },
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
