import { defineSchema } from '@tinacms/cli';

import { challengesSchema } from './challenges-schema';
import { postsSchema } from './posts-schema';

export default defineSchema({
  collections: [postsSchema, challengesSchema],
});
