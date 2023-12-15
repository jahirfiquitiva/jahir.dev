import { getOgImage, config } from '@/components/og/response';
import { getBlog } from '@/utils/blog';

export const alt = "Jahir Fiquitiva's Blog Post";

export const runtime = config.runtime;
export const size = config.size;
export const contentType = config.contentType;

export default async function Image({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = getBlog(slug);
  return getOgImage('blog', post?.title, post?.hero);
}
