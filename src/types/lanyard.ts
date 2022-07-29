import type { TrackData } from '@/lib/spotify';

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
