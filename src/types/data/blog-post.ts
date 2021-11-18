import { IReadTimeResults } from 'reading-time';

export interface Post {
  slug: string;
  title: string;
  date?: string;
  hero?: string;
  excerpt?: string;
  color?: string;
  link?: string;
  readingTime?: IReadTimeResults | null;
  inProgress?: boolean;
  keywords?: Array<string>;
}
