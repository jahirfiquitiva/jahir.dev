import {
  createContext,
  useContext,
  useState,
  useEffect,
  useReducer,
  useCallback,
} from 'react';

import useRequest from '~/hooks/useRequest';
import {
  Component,
  ComponentProps,
  ReactionLocalStorage,
  Reactions,
} from '~/types';

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

interface ReactionsProviderProps extends ComponentProps {
  slug: string;
}

export const ReactionsProvider: Component<ReactionsProviderProps> = (props) => {
  const { slug } = props;
  const [mounted, setMounted] = useState(false);
  const [lsState, dispatch] = useReducer(reactionsReducer, {});

  const [state, setState] = useState<Reactions>({});
  const [submitting, setSubmitting] = useState<boolean>(false);

  const { data: remoteReactions } = useRequest<{ counters: Reactions }>(
    `/api/reactions/${slug}`,
  );

  const incrementReaction = useCallback(
    async (reaction: ReactionType) => {
      setSubmitting(true);

      const newState = { ...state };
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
    [mounted, slug, lsState, state, submitting],
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (remoteReactions) setState(remoteReactions.counters);
  }, [remoteReactions]);

  useEffect(() => {
    if (!mounted) return;
    const stickyValue = window.localStorage.getItem(slug);
    if (stickyValue !== null) {
      dispatch({ type: 'ls', payload: JSON.parse(stickyValue) });
    }
  }, [mounted, slug]);

  const { children } = props;

  const contextValue: ReactionsContextValue = {
    slug,
    reactions: { ...lsState, ...state },
    incrementReaction,
    submitting,
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
