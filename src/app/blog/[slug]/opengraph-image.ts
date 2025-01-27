import { getOgImage } from '@/components/og/response';
import { allReadableBlogs } from '@/utils/blog';
import { config } from '@/utils/og';

import type { BlogPostPageContext } from './types';

export const runtime = 'edge';
export const dynamic = 'force-static';

export const size = {
  width: config.size.width,
  height: config.size.height,
};
export const contentType = config.contentType;

export default async function Image(context: BlogPostPageContext) {
  const { slug } = await context.params;
  if (!slug) return getOgImage('blog');
  const post = allReadableBlogs.find((b) => b.slug === slug);
  if (!post) return getOgImage('blog');
  return getOgImage('blog', post.title, post.hero);
}
