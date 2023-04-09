import { getCountryByAlpha2 } from 'country-locale-map';
import type { GetServerSideProps, NextPage } from 'next';

import { Layout, Seo } from '@/old/components/molecules';
import { Intro, Projects, Skills } from '@/old/components/views';
import allProjects from '@/old/data/projects.json';
import type { Project } from '@/old/types';
import { Button } from '@/old/v2/components/core/button/button';

interface HomeProps {
  projects?: Array<Project>;
  countryName?: string;
  countryEmoji?: string;
}

const Home: NextPage<HomeProps> = (props) => {
  const { projects, countryName, countryEmoji } = props;
  return (
    <Layout>
      <Seo
        title={'Jahir Fiquitiva – Full-stack Software Engineer'}
        description={
          // eslint-disable-next-line max-len
          "I'm a passionate and creative full-stack software engineer based in Colombia 🇨🇴. Visit my website to learn more about me and my projects"
        }
        exactUrl={'https://jahir.dev'}
        keywords={[
          'jahir',
          'fiquitiva',
          'jahirfiquitiva',
          'open-source',
          'full-stack',
          'software engineer',
          'colombia',
          'bio',
          'developer',
          'portfolio',
          'development',
          'android',
          'web',
        ]}
      />
      <Button title={'button'}> This is a new button</Button>
      <Intro
        countryName={decodeURIComponent(countryName || '')}
        countryEmoji={decodeURIComponent(countryEmoji || '')}
      />
      <Projects projects={projects} />
      <Skills />
    </Layout>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const countryCode = query.country as string;
  let country = null;
  if (countryCode) country = getCountryByAlpha2(countryCode);

  const projects = allProjects
    .sort((a, b) => a.order - b.order)
    .filter((it) => !it.hide);

  return {
    props: {
      projects,
      countryName: country?.name,
      countryEmoji: country?.emoji,
    },
  };
};
