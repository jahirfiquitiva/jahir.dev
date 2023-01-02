/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable camelcase */
import {
  databaseQueryEndpoint,
  requestOptions,
  fetchBookmarkPromise,
} from '@/lib/notion';
import { buildApiResponse } from '@/utils/response';

export const config = { runtime: 'edge' };

export default async function handler() {
  try {
    const databaseRequest = await fetch(
      databaseQueryEndpoint,
      // @ts-ignore
      requestOptions,
    );
    const { results = [] } = await databaseRequest.json();
    const bookmarksPromises = results.map(fetchBookmarkPromise);
    const bookmarks = (await Promise.all(bookmarksPromises).catch(() => []))
      // @ts-ignore
      .filter((it) => !!it && !!it.link);
    return buildApiResponse(
      bookmarks.length ? 200 : 400,
      { success: !!bookmarks.length, bookmarks },
      { 'cache-control': 'public, s-maxage=3600, stale-while-revalidate=1800' },
    );
  } catch (err) {
    return buildApiResponse(400, {
      success: false,
      // @ts-ignore
      error: err?.message || err?.stackTrace.toString() || 'Unexpected error',
    });
  }
}
