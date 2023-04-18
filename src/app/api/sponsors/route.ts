import { NextResponse } from 'next/server';

import { getBmacData } from '@/lib/sponsors/bmac/bmac';

export async function GET() {
  const bmacData = await getBmacData();

  return NextResponse.json(bmacData);
}
