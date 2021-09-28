import { IReadTimeResults } from 'reading-time';

export interface SimpleBlogPost {
  slug: string;
  title: string;
  date: string;
  hero?: string;
  excerpt?: string;
  color?: string;
  link?: string;
  readingTime?: IReadTimeResults | null;
  inProgress?: boolean;
  keywords?: Array<string>;
}

export interface FullBlogPost extends SimpleBlogPost {
  tableOfContents?: string | null;
  body?: string;
}
