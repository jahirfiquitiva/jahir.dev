import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

import { DotsDivider } from '@/components/atoms';
import { Layout } from '@/components/molecules';
import { Intro, Projects, Skills } from '@/sections';
import type { Project } from '@/types';
import { pick } from '@/utils';
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
      <Head>
        <title>Jahir Fiquitiva</title>
      </Head>
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
        'iconMeta',
      ]),
    )
    .filter((it) => !it.hide);

  return {
    props: { projects },
  };
};
