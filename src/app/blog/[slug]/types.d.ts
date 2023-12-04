import type { Blog } from 'contentlayer/generated';

import type { RequestContext } from '@/types/request';

export type BlogPostPageContext = RequestContext<{
  slug?: string;
  post?: Omit<Blog, '_raw' | 'body'>;
}>;
