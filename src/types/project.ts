import { HeroMeta } from '@/types';

export interface Project {
  slug: string;
  name: string;
  description: string;
  icon: string;
  preview?: string;
  link: string;
  color?: string;
  darkColor?: string;
  tag?: string;
  stack?: Array<string>;
  hide?: boolean;
  repo?: string;
  owner?: string;
  inProgress?: boolean;
  iconMeta?: HeroMeta;
}
