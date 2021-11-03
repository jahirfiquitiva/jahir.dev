/* eslint-disable camelcase */
import { TopTrackData, TrackData } from './music';

export interface DiscordStatus {
  state?: string;
  id?: string;
  emoji?: {
    name?: string;
    id?: string;
  };
  created_at?: number;
}

export interface DiscordActivity extends DiscordStatus {
  timestamps?: {
    start?: number;
  };
  name?: string;
  details?: string;
  assets?: {
    small_text?: string;
    small_image?: string;
    large_text?: string;
    large_image?: string;
  };
  application_id?: string;
}

type DiscordStatusName = 'online' | 'offline' | 'idle' | 'dnd';

export interface DiscordUser {
  id?: string;
  username?: string;
  avatar?: string;
}

export interface DiscordData {
  discord_user?: DiscordUser;
  discord_status?: DiscordStatusName;
  activities?: Array<DiscordActivity>;
}

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
}

export interface Status {
  emoji?: string;
  status?: string;
  updatedAt?: number;
}

export interface Counters {
  githubStars?: number;
  githubFollowers?: number;
  twitterFollowers?: number;
}

export interface DashboardData {
  user?: DiscordUser;
  statusName?: DiscordStatusName;
  status?: Status;
  activities?: Array<Activity>;
  nowPlaying?: TrackData | null;
  counters?: Counters | null;
}
