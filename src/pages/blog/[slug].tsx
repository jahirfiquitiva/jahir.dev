import type { GetStaticPaths, GetStaticProps } from 'next';
// import { useMDXComponent } from 'next-contentlayer/hooks';
import Head from 'next/head';
// import { useRouter } from 'next/router';
import { useMemo } from 'react';

// import { About as AboutSection } from '@/sections';
import { useHasMounted } from '@/hooks';
import type { Post } from '@/types/post';
import { getAllPosts } from '@/utils';
import type { Blog } from 'contentlayer/generated';

import { type NextPageWithLayout } from './../_app';

const mapContentLayerBlog = (post?: Blog): Post | null => {
  if (!post) return null;
  return { ...post } as Post;
};

interface PostPageProps {
  post: Blog;
}

const PostPage: NextPageWithLayout<PostPageProps> = (props) => {
  const { post: basePost } = props;
  const hasMounted = useHasMounted();
  const post = useMemo(() => mapContentLayerBlog(basePost), [basePost]);
  // const router = useRouter();
  // const MdxComponent = useMDXComponent(basePost.body.code);

  // if (!router.isFallback && !post?.slug) {
  //   return <FourHundredFour />;
  // }

  // if (!post || !MdxComponent) {
  //   return <ErrorPage />;
  // }

  if (post && post.link) {
    try {
      if (hasMounted) window.location.href = post.link;
    } catch (e) {}
  }

  return (
    <>
      <Head>
        <title>Blog | Jahir Fiquitiva</title>
      </Head>
      <p>Specific blog page</p>
    </>
  );
};

export default PostPage;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getAllPosts([], true).map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = getAllPosts([], true).find((post) => post.slug === params?.slug);
  const shouldRedirect = post && post.link && post.link.length > 0;
  if (shouldRedirect) {
    return {
      props: {
        post,
        redirect: {
          destination: post?.link,
          permanent: false,
        },
      },
    };
  }
  return { props: { post } };
};
