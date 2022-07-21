import type { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Head from 'next/head';
// import { useRouter } from 'next/router';
import { useMemo } from 'react';

import { Layout } from '@/components/elements';
import { MdxContent, mdxComponents } from '@/components/mdx';
import { useHasMounted } from '@/hooks';
import type { Post } from '@/types';
import { getAllPosts } from '@/utils';
import type { Blog } from 'contentlayer/generated';

const mapContentLayerBlog = (post?: Blog): Post | null => {
  if (!post) return null;
  return { ...post } as Post;
};

interface PostPageProps {
  post: Blog;
}

const PostPage: NextPage<PostPageProps> = (props) => {
  const { post: basePost } = props;
  const MdxComponent = useMDXComponent(basePost.body.code);
  const post = useMemo(() => mapContentLayerBlog(basePost), [basePost]);
  const hasMounted = useHasMounted();
  // const router = useRouter();

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
    <Layout>
      <Head>
        <title>Blog | Jahir Fiquitiva</title>
      </Head>
      <MdxContent
        backText={'Back to blog posts list'}
        backHref={'/blog'}
        contentType={'blog'}
        content={post as Post}
      >
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        <MdxComponent components={{ ...mdxComponents } as any} />
      </MdxContent>
    </Layout>
  );
};

export default PostPage;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getAllPosts([], true)
      .filter((it) => it.slug !== 'uses')
      .map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = getAllPosts([], true)
    .filter((it) => it.slug !== 'uses')
    .find((post) => post.slug === params?.slug);
  const shouldRedirect = post && post.link && post.link.length > 0;
  if (shouldRedirect) {
    return {
      props: {
        post,
        redirect: {
          destination: post?.link,
          permanent: true,
        },
      },
    };
  }
  return { props: { post } };
};
