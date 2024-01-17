import { getOgImage } from '@/components/og/response';
import { getBlogPosts } from '@/lib/blog';
import { config } from '@/utils/og';

import type { BlogPostPageContext } from './types';

export const runtime = 'edge';
export const size = {
  width: config.size.width,
  height: config.size.height,
};
export const contentType = config.contentType;

export default async function Image(context: BlogPostPageContext) {
  const { slug } = context.params;
  if (!slug) return getOgImage('blog');
  const post = getBlogPosts().find((b) => b.slug === slug);
  if (!post) return getOgImage('blog');
  return getOgImage('blog', post.title, post.hero);
}
