import { GetStaticPaths, GetStaticProps } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

import type { Blog } from '.contentlayer/types';
import { Page } from '~/components/blocks';
import { MdxContent } from '~/components/elements';
import { mdxComponents } from '~/components/mdx';
import useHasMounted from '~/hooks/useHasMounted';
import FourHundredFour from '~/pages/404';
import ErrorPage from '~/pages/500';
import { Component, ComponentProps, Post } from '~/types';
import { getAllPosts } from '~/utils/posts';

const mapContentLayerBlog = (post?: Blog): Post | null => {
  if (!post) return null;
  return { ...post } as Post;
};

interface PostPageProps extends ComponentProps {
  post: Blog;
}

const PostPage: Component<PostPageProps> = ({ post: basePost }) => {
  const hasMounted = useHasMounted();
  const router = useRouter();
  const MdxComponent = useMDXComponent(basePost.body.code);
  const post = useMemo(() => mapContentLayerBlog(basePost), [basePost]);

  if (!router.isFallback && !post?.slug) {
    return <FourHundredFour />;
  }

  if (!post || !MdxComponent) {
    return <ErrorPage />;
  }

  if (post && post.link) {
    try {
      if (hasMounted) window.location.href = post.link;
    } catch (e) {}
  }

  return (
    <Page
      title={
        post.title
          ? `${post?.title} | Blog ~ Jahir Fiquitiva 💎`
          : 'Blog ~ Jahir Fiquitiva 💎'
      }
      description={post.excerpt}
      keywords={post.keywords}
      image={`https://jahir.dev${
        post.hero || '/static/images/brand/banner.png'
      }`}
      siteType={'blog'}
      exactUrl={`https://jahir.dev/blog/${post.slug}`}
      metaImageStyle={'summary_large_image'}
    >
      <MdxContent
        backText={'Back to blog posts list'}
        backHref={'/blog'}
        contentType={'blog'}
        content={post}
      >
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        <MdxComponent components={{ ...mdxComponents } as any} />
      </MdxContent>
    </Page>
  );
};

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

export default PostPage;
