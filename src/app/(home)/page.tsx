import { Intro } from '@/components/views/home/intro';
import { ProjectsList } from '@/components/views/projects';

import { TopBlogPosts } from './top-posts';

export default function Home() {
  return (
    <>
      <Intro />
      <TopBlogPosts />
      <ProjectsList title={'Featured projects'} featuredOnly />
    </>
  );
}
