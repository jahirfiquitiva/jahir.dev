import { getCountryByAlpha2 } from 'country-locale-map';
import { headers } from 'next/headers';

import { Intro } from '@/components/views/home/intro';
import { Skills } from '@/components/views/home/skills';
import { Projects } from '@/components/views/projects/projects';
import projects from '@/data/projects.json';

export const runtime = 'edge';

const sortedProjects = projects
  .filter((it) => !it.hide)
  .sort((a, b) => a.order - b.order);

const getCountryName = (countryCode?: string | null): string | null => {
  if (!countryCode) return null;
  return getCountryByAlpha2(countryCode)?.name || null;
};

export default function Home() {
  const country = getCountryName(headers().get('x-vercel-ip-country'));
  return (
    <>
      <Intro country={country} />
      <Projects projects={sortedProjects} />
      <Skills />
    </>
  );
}
