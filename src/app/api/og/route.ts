import { getOgImage } from '@/components/og/response';

export const runtime = 'edge';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  return getOgImage(
    searchParams.get('path'),
    searchParams.get('title'),
    searchParams.get('hero'),
  );
}
