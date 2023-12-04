import type { RequestContext } from '@/types/request';

export type BlogPostPageContext = RequestContext<{
  slug?: string;
}>;
