import { Kysely } from 'kysely';
import { PlanetScaleDialect } from 'kysely-planetscale';

export const reactionsNames = [
  'likes',
  'loves',
  'awards',
  'bookmarks',
] as const;

export type ReactionName = (typeof reactionsNames)[number];
export type CounterName = ReactionName | 'views';

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
