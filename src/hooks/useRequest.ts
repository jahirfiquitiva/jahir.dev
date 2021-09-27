import { MutatorCallback } from 'swr/dist/types';
import useSWR from 'swr';
import fetcher from '~/utils/fetcher';

interface SwrData<T = unknown> {
  data?: T | null;
  loading: boolean;
  error?: string | unknown | null;
  mutate?: (
    data?: T | Promise<T> | MutatorCallback<T>,
    shouldRevalidate?: boolean,
  ) => Promise<T | undefined>;
}

const useRequest = <T>(url: string): SwrData<T> => {
  const { data, error, mutate } = useSWR<T>(url, fetcher);
  return {
    data,
    error,
    mutate,
    loading: !data && !error,
  };
};

export default useRequest;
