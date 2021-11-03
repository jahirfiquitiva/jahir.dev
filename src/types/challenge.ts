import { Post } from '~/types';

export interface CodingChallenge
  extends Omit<Post, 'hero' | 'excerpt' | 'color' | 'link' | 'readingTime'> {
  stack?: Array<string>;
}
