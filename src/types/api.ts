import { MutatorCallback } from 'swr/dist/types';

// eslint-disable-next-line
export type NextApiFunc = any | unknown | null;

export interface SwrData<T = unknown> {
  data?: Array<T> | null;
  loading: boolean;
  error?: string | unknown | null;
  mutate?: (
    data?: T | Promise<T> | MutatorCallback<T>,
    shouldRevalidate?: boolean,
  ) => Promise<T | undefined>;
}
