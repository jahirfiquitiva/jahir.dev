import type { IReadTimeResults } from 'reading-time';

export interface HeroMeta {
  size: { width: number; height: number };
  blur64?: string;
}

export interface Post {
  slug: string;
  title: string;
  date: string;
  hero?: string;
  heroSource?: string;
  excerpt?: string;
  color?: string;
  link?: string;
  readingTime?: IReadTimeResults | null;
  inProgress?: boolean;
  keywords?: Array<string>;
  year?: number;
  devToId?: number;
  heroMeta?: HeroMeta;
  fullHeightHero?: boolean;
}
