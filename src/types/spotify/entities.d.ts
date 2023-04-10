import type { SpotifyEntity } from './entity';

export interface Album extends SpotifyEntity {
  type: 'album';
  popularity: number;
}

export interface Artist extends SpotifyEntity {
  type: 'artist';
  popularity: number;
}

export interface Track extends SpotifyEntity {
  type: 'track';
  popularity: number;
  duration_ms: number;
  album: Album;
  artists: Array<Artist>;
  preview_url: string;
  is_playable: boolean;
  is_local: boolean;
}

export interface Playlist extends SpotifyEntity {
  type: 'playlist';
  description: string;
  popularity: number;
  followers: { total: number };
  tracks: {
    total: number;
    items: Array<{ added_at: string; track: Track }>;
  };
}
