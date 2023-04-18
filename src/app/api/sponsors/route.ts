import { NextResponse } from 'next/server';

import { getBmacData } from '@/lib/sponsors/bmac/bmac';
import { fetchSponsors } from '@/lib/sponsors/github/sponsors';

export async function GET() {
  const bmacData = await getBmacData();
  const githubData = await fetchSponsors();

  return NextResponse.json({ bmacData, githubData });
}
