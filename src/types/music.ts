const forbiddenKeywords = ['netflix', 'disney'];

export interface TopTrackData {
  title?: string;
  artist?: string;
  album?: string;
  url?: string;
  image?: {
    height?: number;
    width?: number;
    url?: string;
  };
}

export interface TrackData extends TopTrackData {
  isPlaying?: boolean;
}

export const validateTrack = (track: TopTrackData): boolean => {
  return !forbiddenKeywords.some(
    (it) =>
      track?.title?.toLowerCase().includes(it) ||
      track?.album?.toLowerCase().includes(it),
  );
};
