'use server';

import { db } from '@/lib/planetscale';

export async function trackView(slug: string) {
  try {
    const data = await db
      .selectFrom('counters')
      .where('slug', '=', slug)
      .select(['views'])
      .execute();

    const views = !data.length ? 0 : Number(data[0].views);
    db.insertInto('counters')
      .values({ slug, views: 1 })
      .onDuplicateKeyUpdate({ views: views + 1 })
      .execute();
  } catch (e) {}
}
