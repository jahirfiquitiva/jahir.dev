import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';

import { allProjects } from '.contentlayer/data';
import type { Project } from '.contentlayer/types';
import { Page } from '~/components/blocks';
import { ProjectsProps } from '~/components/sections';
import pick from '~/lib/pick';
import {
  Component,
  ComponentProps,
  ProjectProps as ProjectType,
} from '~/types';

const DynamicProjects = dynamic<ProjectsProps>(
  () =>
    import('~/components/sections/home/projects').then((mod) => mod.Projects),
  { ssr: false },
);

interface HomePageProps extends ComponentProps {
  projects?: Array<ProjectType>;
}

const HomePage: Component<HomePageProps> = (props) => {
  return (
    <Page
      title={'Projects ~ Jahir Fiquitiva 💎'}
      exactUrl={'https://jahir.dev/projects'}
    >
      <DynamicProjects projects={props.projects} full />
    </Page>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const projects = allProjects
    .sort((a: Project, b: Project) => a.order - b.order)
    .map((project: Project) =>
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
      ]),
    );

  return {
    props: { projects },
  };
};

export default HomePage;
