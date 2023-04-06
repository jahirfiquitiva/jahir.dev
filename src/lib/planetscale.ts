import { Kysely } from 'kysely';
import { PlanetScaleDialect } from 'kysely-planetscale';

interface CountersTable {
  slug: string;
  views?: number;
  likes?: number;
  loves?: number;
  awards?: number;
  bookmarks?: number;
}

interface Database {
  counters: CountersTable;
}

export const queryBuilder = new Kysely<Database>({
  dialect: new PlanetScaleDialect({
    url: process.env.DATABASE_URL,
  }),
});
