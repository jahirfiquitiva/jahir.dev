import type { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import Head from 'next/head';
// import { useRouter } from 'next/router';
import { useMemo } from 'react';

import { Layout } from '@/components/elements';
import { MdxContent, mdxComponents } from '@/components/mdx';
import { useMDXComponent } from '@/hooks';
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
}

const ProjectPage: NextPage<ProjectPageProps> = (props) => {
  const { project: baseProject } = props;
  const MdxComponent = useMDXComponent(baseProject?.body?.code || '');
  const project = useMemo(
    () => mapContentLayerProject(baseProject),
    [baseProject],
  );
  // const router = useRouter();

  // if (!router.isFallback && !project?.slug) {
  //   return <FourHundredFour />;
  // }

  if (!project || !MdxComponent) {
    return null; // <ErrorPage />;
  }

  return (
    <Layout>
      <Head>
        <title>Projects | Jahir Fiquitiva</title>
      </Head>
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
  if (!project) {
    return {
      props: {
        project: {
          body: {
            code: 'var Component = () => { return null }; return Component',
          },
        },
      },
    };
  }
  if (project.inProgress || project.hide) {
    return {
      redirect: {
        destination: project.link,
        permanent: false,
      },
    };
  }
  return { props: { project } };
};
