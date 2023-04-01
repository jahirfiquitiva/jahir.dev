import type { GetStaticProps, NextPage } from 'next';

import { DotsDivider } from '@/components/atoms';
import { Layout, Seo } from '@/components/molecules';
import { Intro, Projects, Skills } from '@/sections';
import type { Project } from '@/types';
import {
  allProjects,
  type Project as GeneratedProject,
} from 'contentlayer/generated';

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
      <DotsDivider />
      <Projects projects={projects} />
      <DotsDivider />
      <Skills />
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const projects = allProjects
    .sort((a: GeneratedProject, b: GeneratedProject) => a.order - b.order)
    .filter((it) => !it.hide);

  return {
    props: { projects },
  };
};
