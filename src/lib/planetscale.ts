import { Kysely } from 'kysely';
import { PlanetScaleDialect } from 'kysely-planetscale';

export const reactionsNames = [
  'likes',
  'loves',
  'awards',
  'bookmarks',
] as const;

export type ReactionName = typeof reactionsNames[number];

export type CountersReactions = { [Key in ReactionName]?: number };

interface CountersTable extends CountersReactions {
  slug: string;
  views?: number;
}

interface VisitsTable {
  id: string;
  city: string;
  country: string;
  hits: number;
}

interface Database {
  counters: CountersTable;
  visits: VisitsTable;
}

export const db = new Kysely<Database>({
  dialect: new PlanetScaleDialect({
    url: process.env.DATABASE_URL,
  }),
});
