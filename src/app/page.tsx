import { Intro } from '@/components/views/home/intro/intro';
import { LetsConnect } from '@/components/views/home/lets-connect';
import { Projects } from '@/components/views/projects/projects';

export default function Home() {
  return (
    <>
      <Intro />
      <LetsConnect />
      <Projects />
    </>
  );
}
