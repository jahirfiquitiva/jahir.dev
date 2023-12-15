import { getOgImage, config } from '@/components/og/response';

export const alt = "Jahir Fiquitiva's Website";

export const runtime = config.runtime;
export const size = config.size;
export const contentType = config.contentType;

export default async function Image({ params }: { params: { slug: string } }) {
  console.error({ params });
  return getOgImage();
}
