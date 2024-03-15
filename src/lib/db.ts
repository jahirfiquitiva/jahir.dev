import { neon, type NeonQueryFunction } from '@neondatabase/serverless';
import { varchar } from 'drizzle-orm/mysql-core';
import { drizzle } from 'drizzle-orm/neon-http';
import { integer, pgTable } from 'drizzle-orm/pg-core';

type CastNeonQueryFunction = NeonQueryFunction<boolean, boolean>;
const { DATABASE_URL = '' } = process.env;
console.error('Connecting to DB:', DATABASE_URL);
const sql = neon(DATABASE_URL) as CastNeonQueryFunction;

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
