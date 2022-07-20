import { createContext, useContext } from 'react';

import { useRequest } from '@/hooks';
import type { SponsorCategory, SponsorsCategoriesResponse } from '@/lib/sponsors';
import type { FC } from '@/types';

export interface SponsorsContextValue {
  categories: Array<SponsorCategory>;
  totalEarningsPerMonth?: number;
  sponsorsCount?: number;
  loading?: boolean;
  error?: string;
}

const defaultContextState: SponsorsContextValue = {
  categories: [],
  totalEarningsPerMonth: 0,
  sponsorsCount: 0,
};

const SponsorsContext =
  createContext<SponsorsContextValue>(defaultContextState);

export const SponsorsProvider: FC = (props) => {
  const { data, loading, error } =
    useRequest<SponsorsCategoriesResponse>('/api/sponsors');

  const { children } = props;

  const contextValue: SponsorsContextValue = {
    categories: data?.categories || [],
    totalEarningsPerMonth: data?.totalEarningsPerMonth || 0,
    sponsorsCount: data?.sponsorsCount || 0,
    loading,
    error: data?.error || error?.toString(),
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
