export type SpotifyEntityType = 'album' | 'artist' | 'playlist' | 'track';
export type SpotifyEntityUri = `spotify:${SpotifyEntityType}:${string}`;

export interface Image {
  url: string;
  height?: number | null;
  width?: number | null;
}

export interface SpotifyEntity {
  id: string;
  name: string;
  href: string;
  uri: SpotifyEntityUri;
  type: SpotifyEntityType;
  images: Array<Image>;
  external_urls: { spotify: string };
}
