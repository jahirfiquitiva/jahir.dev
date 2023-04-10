import type { SpotifyEntity } from './entity.d';

export interface SpotifyResponse<T extends SpotifyEntity> {
  href: string;
  next?: string | null;
  previous?: string | null;
  limit: number;
  offset: number;
  total: number;
  items: Array<T>;
}

export interface ErrorResponse {
  error: {
    status: number;
    message: string;
  };
}

export interface PostDeleteResponse {
  snapshot_id: string;
}
