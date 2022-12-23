import * as Vibrant from 'node-vibrant';

import { buildApiResponse } from '@/utils';

export const config = {
  runtime: 'experimental-edge',
};

export default async function handler() {
  try {
    const response = await fetch(
      'https://github.com/Vibrant-Colors/node-vibrant/raw/develop/logo.png?raw=true',
    );
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const vibrant = await Vibrant.from(buffer).getPalette();
    console.error(vibrant);
  } catch (e) {
    console.error(e);
  }
  return buildApiResponse(200, { ok: true });
}
