import { TrackData } from '@/old/lib/spotify';

import { useRequest } from './use-request';

interface NowPlayingData {
  data?: TrackData | null;
  loading: boolean;
  error?: Error | string | null;
}

export const useNowPlaying = (): NowPlayingData =>
  useRequest<TrackData>('/api/now-playing');
