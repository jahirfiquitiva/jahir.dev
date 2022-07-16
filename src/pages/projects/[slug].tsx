import type { GetStaticPaths, GetStaticProps } from 'next';
// import { useMDXComponent } from 'next-contentlayer/hooks';
import Head from 'next/head';
// import { useRouter } from 'next/router';
import { useMemo } from 'react';

// import { About as AboutSection } from '@/sections';
import { useHasMounted } from '@/hooks';
import type { Project } from '@/types';
import { getAllPosts } from '@/utils';
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
  const hasMounted = useHasMounted();
  const project = useMemo(
    () => mapContentLayerProject(baseProject),
    [baseProject],
  );
  // const router = useRouter();
  // const MdxComponent = useMDXComponent(basePost.body.code);

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
      <p>Specific project page</p>
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
