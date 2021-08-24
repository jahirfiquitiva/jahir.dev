export interface TopTrackData {
  title?: string,
  artist?: string,
  album?: string,
  url?: string,
  image?: {
    height?: number,
    width?: number,
    url?: string,
  },
}

export interface TrackData extends TopTrackData {
  isPlaying?: boolean,
}