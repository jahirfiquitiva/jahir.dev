import { headers } from 'next/headers';

import { Intro } from '@/components/views/home/intro';
import { Skills } from '@/components/views/home/skills';
import { Projects } from '@/components/views/projects/projects';
import projects from '@/data/projects.json';

export const runtime = 'edge';

const sortedProjects = projects
  .filter((it) => !it.hide)
  .sort((a, b) => a.order - b.order);

export default function Home() {
  headers().forEach((value, key) => console.error({ key, value }));
  return (
    <>
      <Intro />
      <Projects projects={sortedProjects} />
      <Skills />
    </>
  );
}
