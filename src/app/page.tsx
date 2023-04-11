import { Intro } from '@/components/views/home';
import { Projects } from '@/components/views/projects/projects';
import projects from '@/data/projects.json';

const sortedProjects = projects
  .filter((it) => !it.hide)
  .sort((a, b) => a.order - b.order);

export default function Home() {
  return (
    <>
      <Intro />
      <Projects projects={sortedProjects} />
    </>
  );
}
