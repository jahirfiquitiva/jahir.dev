import type { TrackData } from '@/old/lib/spotify';

interface Timestamps {
  start: number;
  end: number;
}
export interface Spotify {
  track_id: string;
  song: string;
  artist: string;
  album_art_url: string;
  album: string;
  timestamps: Timestamps;
}
interface DiscordUser {
  username: string;
  public_flags: number;
  discriminator: string;
  bot: boolean;
  avatar_decoration: string;
  avatar: string;
}

interface Assets {
  small_text: string;
  small_image: string;
  large_text: string;
  large_image: string;
}
export interface DiscordActivity {
  type: number;
  state: string;
  name: string;
  id: string;
  created_at: number;
  sync_id?: string;
  session_id?: string;
  flags?: number;
  details?: string;
  assets?: Assets;
  application_id?: `${bigint}`;
  timestamps?: Timestamps;
}

export interface LanyardData {
  spotify: Spotify | null;
  listening_to_spotify: boolean;
  discord_user: DiscordUser;
  discord_status: 'online' | 'idle' | 'dnd' | 'offline';
  activities: DiscordActivity[];
  active_on_discord_web: boolean;
  active_on_discord_mobile: boolean;
  active_on_discord_desktop: boolean;
}

export interface LanyardResponse {
  data?: LanyardData;
  success?: boolean;
}

const statusOptionsArray = ['online', 'idle', 'dnd', 'offline'] as const;
export type DiscordStatus = typeof statusOptionsArray[number];

export interface Activity {
  appId?: string;
  startedAt?: number;
  name?: string;
  details?: string;
  state?: string;
  smallImage?: string | null;
  smallImageText?: string;
  largeImage?: string | null;
  largeImageText?: string;
  description?: string;
}

export interface ActivityData {
  status: DiscordStatus;
  activities: Array<Activity>;
  spotify?: TrackData | null;
}
