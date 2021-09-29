import { SimpleBlogPost } from '~/types';

export interface CodingChallenge
  extends Omit<
    SimpleBlogPost,
    'hero' | 'excerpt' | 'color' | 'link' | 'readingTime'
  > {
  stack?: Array<string>;
}
