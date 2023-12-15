import { getOgImage } from '@/components/og/response';
import { config } from '@/utils/og';

export const runtime = config.runtime;

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  return getOgImage(
    searchParams.get('path'),
    searchParams.get('title'),
    searchParams.get('hero'),
    searchParams.get('hd') === '1',
  );
}
