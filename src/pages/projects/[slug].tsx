import type { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

import { Loading } from '@/components/compounds';
import { MdxContent, mdxComponents } from '@/components/mdx';
import { Layout, Seo } from '@/components/molecules';
import { Error, FourOhFour as FourOhFourSection } from '@/sections';
import type { Project } from '@/types';
import {
  allProjects,
  type Project as GeneratedProject,
} from 'contentlayer/generated';

const mapContentLayerProject = (project?: GeneratedProject): Project | null => {
  if (!project) return null;
  return {
    ...project,
    stack: project?.stack || [],
  } as Project;
};

interface ProjectPageProps {
  project: GeneratedProject;
  redirection?: string;
}

const ProjectPage: NextPage<ProjectPageProps> = (props) => {
  const { project: baseProject } = props;
  const MdxComponent = useMDXComponent(baseProject.body.code);
  const project = useMemo(
    () => mapContentLayerProject(baseProject),
    [baseProject],
  );
  const router = useRouter();

  const renderContent = () => {
    if (!router.isFallback && !project?.slug) {
      return <FourOhFourSection />;
    }
    if (router.isFallback) {
      return <Loading css={{ m: 'auto' }} />;
    }
    if (!project || !MdxComponent) {
      return <Error />;
    }
    return (
      <MdxContent
        backText={'Back to projects list'}
        backHref={'/projects'}
        contentType={'projects'}
        content={project as Project}
      >
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        <MdxComponent components={{ ...mdxComponents } as any} />
        {/* <UnderConstruction /> */}
      </MdxContent>
    );
  };

  return (
    <Layout>
      <Seo
        title={`${project?.name} – Projects – Jahir Fiquitiva`}
        description={project?.description || 'Project by Jahir Fiquitiva'}
        exactUrl={`https://jahir.dev/projects/${project?.slug}`}
        image={`https://jahir.dev${
          project?.preview
            ? `/static/images/projects/${project?.preview}`
            : '/static/images/brand/banner.png'
        }`}
        metaImageStyle={'summary_large_image'}
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
      {renderContent()}
    </Layout>
  );
};

export default ProjectPage;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: allProjects
      .filter((project) => !(project.inProgress || project.hide))
      .map((p: GeneratedProject) => ({
        params: { slug: p.slug },
      })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = allProjects.find(
    (post: GeneratedProject) => post.slug === params?.slug,
  );
  if (!project) return { notFound: true };
  if (project.inProgress || project.hide) {
    return {
      props: {
        redirection: project.link,
      },
      redirect: {
        destination: project.link,
        permanent: false,
      },
    };
  }
  return { props: { project } };
};
