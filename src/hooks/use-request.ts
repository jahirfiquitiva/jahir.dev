import useSWR from 'swr';
import type { MutatorCallback, SWRConfiguration } from 'swr';

/* eslint-disable no-undef */
async function fetcher<T>(input: RequestInfo, init?: RequestInit): Promise<T> {
  const res = await fetch(input, init);
  return (await res.json()) as T;
}

interface SwrData<T = unknown> {
  data?: T | null;
  loading: boolean;
  error?: string | Error | null;
  mutate?: (
    data?: T | Promise<T> | MutatorCallback<T>,
    shouldRevalidate?: boolean,
  ) => Promise<T | undefined>;
}

export const useRequest = <T>(
  url: string,
  options?: SWRConfiguration,
): SwrData<T> => {
  const { data, error, mutate, isLoading } = useSWR<T>(url, fetcher, options);
  return {
    data,
    error,
    mutate,
    loading: isLoading || (!data && !error),
  };
};

export const useImmutableRequest = <T>(
  url: string,
  options?: SWRConfiguration,
): SwrData<T> =>
  useRequest(url, {
    ...options,
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
