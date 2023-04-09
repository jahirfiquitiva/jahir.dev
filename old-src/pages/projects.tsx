import type { GetStaticProps, NextPage } from 'next';

import { Layout, Seo } from '@/old/components/molecules';
import { Projects as ProjectsSection } from '@/old/components/views';
import allProjects from '@/old/data/projects.json';
import type { Project } from '@/old/types';
import { buildOgImageUrl } from '@/old/utils/og';

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
        image={buildOgImageUrl('projects', 'Projects')}
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
