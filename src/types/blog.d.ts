interface BlogPostMetadata {
  title: string;
  date: string;
  color: string;
  summary: string;
  hero?: string;
  heroSource?: string;
  link?: string;
  inProgress?: boolean;
  keywords?: Array<string>;
  readingTime: number;
}

type Blog = BlogPostMetadata & {
  slug: string;
  content?: string;
};
