import type { GetStaticProps } from 'next';
import Head from 'next/head';

// import { About as AboutSection } from '@/sections';
import type { Project } from '@/types';
import { pick } from '@/utils';
import {
  allProjects,
  type Project as GeneratedProject,
} from 'contentlayer/generated';

import { type NextPageWithLayout } from './../_app';

interface BlogProps {
  projects?: Array<Project>;
}

const Blog: NextPageWithLayout<BlogProps> = (props) => {
  const { projects } = props;
  return (
    <>
      <Head>
        <title>Projects | Jahir Fiquitiva</title>
      </Head>
      <pre
        style={{
          maxWidth: 'var(--sizes-max-site-width, 960px)',
          overflowX: 'hidden',
        }}
      >
        <code
          style={{
            maxWidth: 'var(--sizes-max-site-width, 960px)',
            overflowX: 'hidden',
          }}
        >
          {JSON.stringify(projects, null, 2)}
        </code>
      </pre>
    </>
  );
};

export default Blog;

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
      ]),
    );

  return {
    props: { projects },
  };
};
