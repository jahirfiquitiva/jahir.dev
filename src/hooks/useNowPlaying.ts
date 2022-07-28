import { TrackData } from '@/lib/spotify';

import { useActivity } from './useActivity';
import { useRequest } from './useRequest';

interface NowPlayingData {
  data?: TrackData | null;
  loading: boolean;
  error?: string | Error | null;
}

export const useNowPlaying = (): NowPlayingData => {
  const { data, loading, error } = useRequest<TrackData>('/api/now-playing');
  const {
    data: activity,
    loading: activityLoading,
    error: activityError,
  } = useActivity();
  return {
    data: { ...data, ...activity?.spotify } as TrackData,
    loading: !!(loading || activityLoading),
    error: error || activityError,
  };
};
