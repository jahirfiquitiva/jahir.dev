import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

import { Layout } from '@/components/elements';
import { Projects as ProjectsSection } from '@/sections';
import type { Project } from '@/types';
import { pick } from '@/utils';
import {
  allProjects,
  type Project as GeneratedProject,
} from 'contentlayer/generated';

interface ProjectsProps {
  projects?: Array<Project>;
}

const Projects: NextPage<ProjectsProps> = (props) => {
  const { projects } = props;
  return (
    <Layout>
      <Head>
        <title>Projects | Jahir Fiquitiva</title>
      </Head>
      <ProjectsSection projects={projects} showFullList />
    </Layout>
  );
};

export default Projects;

export const getStaticProps: GetStaticProps = async () => {
  const projects = allProjects
    .sort((a: GeneratedProject, b: GeneratedProject) => a.order - b.order)
    .map((project: GeneratedProject) =>
      pick(project, [
        'slug',
        'name',
        'description',
        'icon',
        'preview',
        'link',
        'color',
        'darkColor',
        'stack',
        'hide',
        'repo',
        'owner',
        'inProgress',
      ]),
    );

  return {
    props: { projects },
  };
};
