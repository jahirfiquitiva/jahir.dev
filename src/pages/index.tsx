import type { GetStaticProps, NextPage } from 'next';

import { Layout, Seo } from '@/components/molecules';
import { Intro, Projects, Skills } from '@/components/views';
import allProjects from '@/data/projects.json';
import type { Project } from '@/types';

interface HomeProps {
  projects?: Array<Project>;
}

const Home: NextPage<HomeProps> = (props) => {
  const { projects } = props;
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
      <Intro />
      <Projects projects={projects} />
      <Skills />
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const projects = allProjects
    .sort((a, b) => a.order - b.order)
    .filter((it) => !it.hide);
  return {
    props: { projects },
  };
};
