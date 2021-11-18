import { GetStaticProps } from 'next';

import { allProjects } from '.contentlayer/data';
import type { Project } from '.contentlayer/types';
import { Page } from '~/components/blocks';
import { Home, Projects } from '~/components/sections';
import pick from '~/lib/pick';
import { Component, ComponentProps, ProjectProps } from '~/types';

interface HomePageProps extends ComponentProps {
  projects?: Array<ProjectProps>;
}

const HomePage: Component<HomePageProps> = (props) => {
  return (
    <Page>
      <Home />
      <Projects projects={props.projects} />
    </Page>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const projects = allProjects
    .sort((a: Project, b: Project) => a.order - b.order)
    .filter((project: Project) => !project.hide)
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
