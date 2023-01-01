import {
  createContext,
  useContext,
  useState,
  useEffect,
  useReducer,
  useCallback,
} from 'react';

import { useHasMounted } from '@/hooks/useHasMounted';
import { useRequest } from '@/hooks/useRequest';
import type { FC } from '@/types';

const reactions = ['like', 'love', 'award', 'bookmark'] as const;
type Reaction = typeof reactions[number];
export type ReactionLocalStorage = { [Key in Reaction]?: boolean };
type ReactionsProp = `${Reaction}s`;
export type Reactions = { [Key in ReactionsProp]?: string };

export type ReactionType = keyof ReactionLocalStorage;
type InternalReactionType = ReactionType | 'ls';

interface ReactionAction {
  type: InternalReactionType;
  payload: ReactionLocalStorage;
}

export type ContextReactions = ReactionLocalStorage & Reactions;

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
}

export const ReactionsProvider: FC<ReactionsProviderProps> = (props) => {
  const { slug } = props;
  const hasMounted = useHasMounted();
  const [lsState, dispatch] = useReducer(reactionsReducer, {});

  const [state, setState] = useState<Reactions>({});
  const [submitting, setSubmitting] = useState<boolean>(false);

  const { data: remoteReactions, loading } = useRequest<{
    counters: Reactions;
  }>(`/api/reactions/${slug}`);

  const incrementReaction = useCallback(
    async (reaction: ReactionType) => {
      setSubmitting(true);

      const newState = { ...state };
      // eslint-disable-next-line no-undef
      const newReactionsCount = BigInt(state[`${reaction}s`] || 0) + BigInt(1);
      newState[`${reaction}s`] = newReactionsCount.toString();
      setState(newState);

      const request = await fetch(`/api/reactions/${slug}`, {
        method: 'POST',
        body: JSON.stringify({ reaction: `${reaction}s` }),
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [slug, lsState, state, hasMounted, submitting],
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
