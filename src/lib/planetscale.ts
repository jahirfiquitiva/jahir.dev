import { Kysely } from 'kysely';
import { PlanetScaleDialect } from 'kysely-planetscale';

export const reactionsNames = ['likes', 'loves', 'awards', 'bookmarks'] as const;

export type ReactionName = (typeof reactionsNames)[number];

export type CountersReactions = { [Key in ReactionName]?: number };

interface CountersTable extends CountersReactions {
  slug: string;
  views?: number;
}

interface Database {
  counters: CountersTable;
}

export const db = new Kysely<Database>({
  dialect: new PlanetScaleDialect({
    url: process.env.DATABASE_URL,
  }),
});
