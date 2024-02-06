import type { ReadableTrack, Track } from './entities';
import type { SpotifyEntity } from './entity.d';

export interface SpotifyResponse<T extends SpotifyEntity | PlayHistoryObject> {
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

export interface NowPlayingResponse {
  is_playing: boolean;
  item: Track;
}

export interface PlayHistoryObject {
  track: Track;
  played_at?: string;
  context?: unknown | null;
}

export type NowPlayingAPIResponse = {
  track?: ReadableTrack | null;
  isPlaying: boolean;
} | null;
