import { NextResponse } from 'next/server';

import { getSponsorsAndCategories } from '@/lib/sponsors/all';

export async function GET() {
  const data = await getSponsorsAndCategories();
  return NextResponse.json(data);
}
