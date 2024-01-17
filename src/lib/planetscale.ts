import { Kysely } from 'kysely';
import { PlanetScaleDialect } from 'kysely-planetscale';

export const countersNames = [
  'likes',
  'loves',
  'awards',
  'bookmarks',
  'views',
] as const;

export type CounterName = (typeof countersNames)[number];

export type Counters = { [Key in CounterName]?: number };

interface CountersTable extends Counters {
  slug: string;
}

interface Database {
  counters: CountersTable;
}

export const db = new Kysely<Database>({
  dialect: new PlanetScaleDialect({
    url: process.env.DATABASE_URL,
  }),
});
