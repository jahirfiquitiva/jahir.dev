interface RemoteInstagramPost {
  id?: string;
  mediaUrl?: string;
  permalink?: string;
  caption?: string;
  photo?: string;
  mediaType?: 'IMAGE' | 'CAROUSEL_ALBUM' | 'VIDEO';
  thumbnailUrl?: string;
}

type BeholdColor = `${number},${number},${number}`;

interface ExtraBeholdData {
  colorPalette?: {
    muted: BeholdColor;
    mutedLight: BeholdColor;
    mutedDark: BeholdColor;
    vibrant: BeholdColor;
    vibrantLight: BeholdColor;
    vibrantDark: BeholdColor;
  };
  dimensions?: { width: number; height: number };
}

interface BeholdPost extends RemoteInstagramPost, ExtraBeholdData {
  prunedCaption?: string;
}

export interface InstagramPost extends ExtraBeholdData {
  id?: string;
  photoUrl?: string;
  postUrl?: string;
  caption?: string;
}
