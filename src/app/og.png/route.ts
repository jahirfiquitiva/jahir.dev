import { getOgImage } from '@/components/og/response';

export const runtime = 'edge';
export const dynamic = 'force-static';

export async function GET() {
  return getOgImage('404');
}
