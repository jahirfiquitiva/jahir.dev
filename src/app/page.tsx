import { Suspense } from 'react';

import { Intro } from '@/components/views/home/intro/intro';
import { Skills } from '@/components/views/home/skills/skills';
import { Projects } from '@/components/views/projects/projects';

import Loading from './loading';

export default function Home() {
  return (
    <>
      <Intro />
      <Suspense fallback={<Loading />}>
        <Projects />
      </Suspense>
      <Skills />
    </>
  );
}
