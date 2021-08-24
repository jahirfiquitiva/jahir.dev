export interface FrontmatterProps {
  title: string,
  date: string,
  hero?: string,
  description?: string,
  color?: string,
  link?: string,
  page?: number,
  tableOfContents?: string,
  readingTime?: {
    text?: string,
    minutes?: number,
    time?: number,
    words?: number,
  }
}

export interface BlogPostProps {
  slug: string,
  color?: string,
  frontmatter: FrontmatterProps,
  markdownBody?: string
}