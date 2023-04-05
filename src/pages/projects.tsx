import type { GetStaticProps, NextPage } from 'next';

import { Layout, Seo } from '@/components/molecules';
import { Projects as ProjectsSection } from '@/components/views';
import allProjects from '@/data/projects.json';
import type { Project } from '@/types';

interface ProjectsProps {
  projects?: Array<Project>;
}

const Projects: NextPage<ProjectsProps> = (props) => {
  const { projects } = props;
  return (
    <Layout>
      <Seo
        title={'Projects – Jahir Fiquitiva'}
        description={
          // eslint-disable-next-line max-len
          "Projects by Jahir Fiquitiva. Get to know the projects I'm most proud of. Many of them are open-source."
        }
        exactUrl={'https://jahir.dev/projects'}
        keywords={[
          'tech',
          'software',
          'development',
          'project',
          'portfolio',
          'app',
          'programming',
          'open-source',
        ]}
        siteType={'portfolio'}
      />
      <ProjectsSection projects={projects} showFullList />
    </Layout>
  );
};

export default Projects;

export const getStaticProps: GetStaticProps = async () => {
  const projects = allProjects.sort((a, b) => a.order - b.order);
  return {
    props: { projects },
  };
};
