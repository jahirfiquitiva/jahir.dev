export interface BlogPost {
  title: string;
  date: string;
  slug: string;
  hero?: string;
  excerpt?: string;
  color?: string;
  link?: string;
  readingTime?: {
    text?: string;
    minutes?: number;
    time?: number;
    words?: number;
  };
  inProgress?: boolean;
}

export interface FullBlogPost extends BlogPost {
  tableOfContents?: string;
  content?: string;
}