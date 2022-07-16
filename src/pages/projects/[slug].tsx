import type { GetStaticPaths, GetStaticProps } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Head from 'next/head';
// import { useRouter } from 'next/router';
import { useMemo } from 'react';

// import { About as AboutSection } from '@/sections';
import { MdxContent, mdxComponents } from '@/components/mdx';
// import { useHasMounted } from '@/hooks';
import type { Project } from '@/types';
import {
  allProjects,
  type Project as GeneratedProject,
} from 'contentlayer/generated';

import { type NextPageWithLayout } from './../_app';

const mapContentLayerProject = (project?: GeneratedProject): Project | null => {
  if (!project) return null;
  return {
    ...project,
    stack: project?.stack || [],
  } as Project;
};

interface PostPageProps {
  project: GeneratedProject;
}

const PostPage: NextPageWithLayout<PostPageProps> = (props) => {
  const { project: baseProject } = props;
  const MdxComponent = useMDXComponent(baseProject.body.code);
  const project = useMemo(
    () => mapContentLayerProject(baseProject),
    [baseProject],
  );
  // const hasMounted = useHasMounted();
  // const router = useRouter();

  // if (!router.isFallback && !project?.slug) {
  //   return <FourHundredFour />;
  // }

  // if (!project || !MdxComponent) {
  //   return <ErrorPage />;
  // }

  return (
    <>
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
    </>
  );
};

export default PostPage;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: allProjects.map((p: GeneratedProject) => ({
      params: { slug: p.slug },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = allProjects.find(
    (post: GeneratedProject) => post.slug === params?.slug,
  );
  return { props: { project } };
};
