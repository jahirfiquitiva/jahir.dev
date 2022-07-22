import type { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

import { Loading } from '@/components/compounds';
import { Layout } from '@/components/molecules';
import { MdxContent, mdxComponents } from '@/components/mdx';
import { useMDXComponent } from '@/hooks';
import { FourOhFour as FourOhFourSection } from '@/sections';
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
  const MdxComponent = useMDXComponent(basePost?.body?.code || '');
  const post = useMemo(() => mapContentLayerBlog(basePost), [basePost]);
  const router = useRouter();

  const renderContent = () => {
    if (!router.isFallback && !post?.slug) {
      return <FourOhFourSection />;
    }
    if (router.isFallback) {
      return <Loading css={{ m: 'auto' }} />;
    }
    if (!post || !MdxComponent) {
      return <p>error</p>; // <ErrorPage />;
    }
    return (
      <MdxContent
        backText={'Back to blog posts list'}
        backHref={'/blog'}
        contentType={'blog'}
        content={post as Post}
      >
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        <MdxComponent components={{ ...mdxComponents } as any} />
      </MdxContent>
    );
  };

  return (
    <Layout>
      <Head>
        <title>Blog | Jahir Fiquitiva</title>
      </Head>
      {renderContent()}
    </Layout>
  );
};

export default PostPage;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getAllPosts([], true)
      .filter((it) => it.slug !== 'uses')
      .filter((post) => {
        const shouldRedirect = post && post.link && post.link.length > 0;
        return !shouldRedirect;
      })
      .map((p) => ({ params: { slug: p.slug } })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = getAllPosts([], true)
    .filter((it) => it.slug !== 'uses')
    .find((post) => post.slug === params?.slug);
  if (!post) {
    return {
      props: {
        post: {
          body: {
            code: 'var Component = () => { return null }; return Component',
          },
        },
      },
    };
  }
  const shouldRedirect = post && post.link && post.link.length > 0;
  if (shouldRedirect) {
    return {
      redirect: {
        destination: post.link || '/',
        permanent: true,
      },
    };
  }
  return { props: { post } };
};
