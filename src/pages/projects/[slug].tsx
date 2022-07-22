import type { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

import { Loading } from '@/components/compounds';
import { Layout } from '@/components/molecules';
import { MdxContent, mdxComponents } from '@/components/mdx';
import { useMDXComponent } from '@/hooks';
import { FourOhFour as FourOhFourSection } from '@/sections';
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
  const MdxComponent = useMDXComponent(baseProject?.body?.code || '');
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
      return <p>error</p>; // <ErrorPage />;
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
      <Head>
        <title>Projects | Jahir Fiquitiva</title>
      </Head>
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
