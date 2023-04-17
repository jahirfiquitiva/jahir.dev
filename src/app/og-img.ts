import { config, handler } from '@/components/og/response';
import type { RequestContext } from '@/types/request';

export const runtime = config.runtime;
export const size = config.size;
export const contentType = config.contentType;

// This isn't working properly yet
// Rename to `opengraph-image.ts` when ready
export default async function og(context: RequestContext) {
  return handler(context);
}
