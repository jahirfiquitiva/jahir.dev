import { Intro } from '@/components/views/home/intro';
import { Skills } from '@/components/views/home/skills';
import { Projects } from '@/components/views/projects/projects';

export default function Home() {
  return (
    <>
      <Intro />
      {/* @ts-expect-error Server Component */}
      <Projects />
      <Skills />
    </>
  );
}
