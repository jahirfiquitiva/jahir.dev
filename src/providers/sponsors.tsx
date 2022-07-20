import {
  createContext,
  useContext,
  useState,
  useEffect,
  useReducer,
  useCallback,
} from 'react';

import { useHasMounted, useRequest } from '@/hooks';
import { SponsorCategory, SponsorsCategoriesResponse } from '@/lib/sponsors';
import type { FC } from '@/types';

export interface SponsorsContextValue {
  categories: Array<SponsorCategory>;
}

const defaultContextState: SponsorsContextValue = {
  categories: [],
};

const SponsorsContext =
  createContext<SponsorsContextValue>(defaultContextState);

export const SponsorsProvider: FC = (props) => {
  const { data, loading, error } =
    useRequest<SponsorsCategoriesResponse>('/api/sponsors');

  console.error(data);

  const { children } = props;

  const contextValue: SponsorsContextValue = {
    categories: data?.categories || [],
  };

  return (
    <SponsorsContext.Provider value={contextValue}>
      {children}
    </SponsorsContext.Provider>
  );
};

export const useSponsors = (): SponsorsContextValue => {
  return useContext(SponsorsContext) || defaultContextState;
};
