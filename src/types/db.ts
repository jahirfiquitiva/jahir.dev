export const reactionsNames = [
  'likes',
  'loves',
  'awards',
  'bookmarks',
] as const;

export type ReactionName = (typeof reactionsNames)[number];
export type CounterName = ReactionName | 'views';
export type Counters = { [Key in CounterName]?: number };
