import { GetStaticPaths, GetStaticProps } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

import { allProjects } from '.contentlayer/data';
import type { Project } from '.contentlayer/types';
import { Page, UnderConstruction } from '~/components/blocks';
import { Project as ProjectComponent } from '~/components/elements';
import { mdxComponents } from '~/components/mdx';
import FourHundredFour from '~/pages/404';
import ErrorPage from '~/pages/500';
import { Component, ComponentProps } from '~/types';

interface ProjectPageProps extends ComponentProps {
  project: Project;
}

const ProjectPage: Component<ProjectPageProps> = ({ project }) => {
  const router = useRouter();
  const MdxComponent = useMDXComponent(project.body.code);

  if (!router.isFallback && !project?.slug) {
    return <FourHundredFour />;
  }

  if (!project || !MdxComponent) {
    return <ErrorPage />;
  }

  return (
    <Page
      title={`${project.name} | Projects ~ Jahir Fiquitiva 💎`}
      description={project.description}
      keywords={project.stack}
      image={`https://jahir.dev${
        project.preview
          ? `/static/images/projects/${project.preview}`
          : '/static/images/brand/banner.png'
      }`}
      siteType={'blog'}
      exactUrl={`https://jahir.dev/projects/${project.slug}`}
      metaImageStyle={'summary_large_image'}
    >
      <ProjectComponent {...project}>
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        <MdxComponent components={{ ...mdxComponents } as any} />
        <UnderConstruction />
      </ProjectComponent>
    </Page>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: allProjects.map((p: Project) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = allProjects.find(
    (post: Project) => post.slug === params?.slug,
  );
  return { props: { project } };
};

export default ProjectPage;
