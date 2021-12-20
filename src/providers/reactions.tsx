import {
  createContext,
  useContext,
  useState,
  useEffect,
  useReducer,
  useCallback,
} from 'react';

import { Component, ComponentProps, ReactionLocalStorage } from '~/types';

export type ReactionType = 'like' | 'love' | 'award' | 'bookmark';
type InternalReactionType = ReactionType | 'ls';

interface ReactionAction {
  type: InternalReactionType;
  payload: ReactionLocalStorage;
}

export interface ReactionsContextValue {
  slug: string;
  reactions: ReactionLocalStorage;
  setReactions?: (newState: ReactionLocalStorage) => boolean;
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
  const [state, dispatch] = useReducer(reactionsReducer, {});

  const setState = useCallback(
    (newState: ReactionLocalStorageObject) => {
      if (!mounted) return false;
      try {
        window.localStorage.setItem(slug, JSON.stringify(newState));
        dispatch({ type: 'ls', payload: newState });
        return true;
      } catch (e) {
        return false;
      }
    },
    [mounted, slug],
  );

  useEffect(() => {
    setMounted(true);
  }, []);

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
    reactions: state,
    setReactions: setState,
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
