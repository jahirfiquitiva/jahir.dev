import { IReadTimeResults } from 'reading-time';

export interface BlogPost {
  slug: string;
  title: string;
  date?: string;
  hero?: string;
  excerpt?: string;
  color?: string;
  link?: string;
  readingTime?: IReadTimeResults | null;
  inProgress?: boolean;
}

export interface FullBlogPost extends BlogPost {
  tableOfContents?: string | null;
  body?: string;
}
