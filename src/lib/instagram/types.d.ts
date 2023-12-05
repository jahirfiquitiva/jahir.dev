type PostType = 'IMAGE' | 'CAROUSEL_ALBUM' | 'VIDEO';

interface RemoteInstagramPost {
  id: string;
  mediaUrl: string;
  mediaType: PostType;
  permalink: string;
  caption?: string;
  prunedCaption?: string;
  accessibilityCaption?: string;
  thumbnailUrl?: string;
  children?: Array<{
    mediaUrl: string;
    mediaType: PostType;
  }>;
  dimensions?: { width: number; height: number };
  timestamp?: string;
}

type BeholdColor = `${number},${number},${number}`;

interface ExtraBeholdData {
  colorPalette?: {
    dominant: BeholdColor;
    muted: BeholdColor;
    mutedLight: BeholdColor;
    mutedDark: BeholdColor;
    vibrant: BeholdColor;
    vibrantLight: BeholdColor;
    vibrantDark: BeholdColor;
  };
}

export type InstagramPost = RemoteInstagramPost & ExtraBeholdData;
