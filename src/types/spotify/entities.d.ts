import type { SpotifyEntity, Image } from './entity';

interface Album extends SpotifyEntity {
  type: 'album';
  popularity: number;
}

interface Artist extends SpotifyEntity {
  type: 'artist';
  popularity: number;
}

export interface Track extends SpotifyEntity {
  id?: string | null;
  type: 'track';
  popularity: number;
  duration_ms: number;
  album: Album;
  artists: Array<Artist>;
  preview_url: string;
  is_playable: boolean;
  is_local: boolean;
}

export interface ReadableTrack {
  id?: string | null;
  name: string;
  artist: string;
  album: string;
  previewUrl: string;
  url: string;
  image?: Image;
  hdImage?: Image;
  duration: number;
  local?: boolean;
}
