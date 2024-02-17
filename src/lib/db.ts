import { neon } from '@neondatabase/serverless';
import { varchar } from 'drizzle-orm/mysql-core';
import { drizzle } from 'drizzle-orm/neon-http';
import { integer, pgTable } from 'drizzle-orm/pg-core';

const sql = neon(process.env.NEON_DB_URL || '');

export const counters = pgTable('counters', {
  // @ts-expect-error idk
  slug: varchar('slug', { length: 255 }).notNull().primaryKey(),
  views: integer('views').notNull().default(0),
  likes: integer('likes').notNull().default(0),
  loves: integer('loves').notNull().default(0),
  awards: integer('awards').notNull().default(0),
  bookmarks: integer('bookmarks').notNull().default(0),
});

export const db = drizzle(sql, { schema: { ...counters } });

export const reactionsNames = [
  'likes',
  'loves',
  'awards',
  'bookmarks',
] as const;

export type ReactionName = (typeof reactionsNames)[number];
export type CounterName = ReactionName | 'views';
export type Counters = { [Key in CounterName]?: number };
