import { getCountryByAlpha2 } from 'country-locale-map';
import { headers as getHeaders } from 'next/headers';

import { Intro } from '@/components/views/home/intro';
import { Skills } from '@/components/views/home/skills';
import { Projects } from '@/components/views/projects/projects';
import projects from '@/data/projects.json';

import { trackVisit } from './visits';

export const runtime = 'edge';

const sortedProjects = projects
  .filter((it) => !it.hide)
  .sort((a, b) => a.order - b.order);

const getCountryName = async (
  countryCode?: string | null,
): Promise<string | null> => {
  if (!countryCode) return null;
  return getCountryByAlpha2(countryCode)?.name || null;
};

export default async function Home() {
  const headers = getHeaders();
  const country = await getCountryName(headers.get('x-vercel-ip-country'));
  trackVisit(headers);

  return (
    <>
      <Intro country={country} />
      <Projects projects={sortedProjects} />
      <Skills />
    </>
  );
}
