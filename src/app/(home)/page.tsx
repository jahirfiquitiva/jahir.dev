import { Intro } from '@/components/views/home/intro';
import { ProjectsList } from '@/components/views/projects';

import { FeaturedBlogPosts } from './featured-posts';

export default function Home() {
  return (
    <>
      <Intro />
      <FeaturedBlogPosts />
      <ProjectsList title={'Featured projects'} featuredOnly />
    </>
  );
}

export const revalidate = 86400;
export const runtime = 'edge';
