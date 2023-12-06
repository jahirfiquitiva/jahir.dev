import { Intro } from '@/components/views/home/intro/intro';
import { Skills } from '@/components/views/home/skills/skills';
import { Projects } from '@/components/views/projects/projects';

export default function Home() {
  return (
    <>
      <Intro />
      <Projects />
      <Skills />
    </>
  );
}
