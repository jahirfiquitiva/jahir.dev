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

const getCountry = (countryCode?: string | null) => {
  if (!countryCode) return null;
  return getCountryByAlpha2(countryCode) || null;
};

export default function Home() {
  const country = getCountry(headers().get('x-vercel-ip-country'));
  return (
    <>
      <Intro
        country={country?.name}
        lang={country?.languages?.[0]}
        emoji={country?.emoji}
      />
      <Projects projects={sortedProjects} />
      <Skills />
    </>
  );
}
