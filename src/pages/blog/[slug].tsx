import { getMDXComponent } from 'mdx-bundler/client';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

import type { Blog } from '.contentlayer/types';
import { BlogPost } from '~/blocks/blog-post';
import { Page } from '~/blocks/page';
import { MDXComponents as mdxComponents } from '~/components/mdx';
import FourHundredFour from '~/pages/404';
import ErrorPage from '~/pages/500';
import { Component, ComponentProps, Post } from '~/types';
import { getAllPosts } from '~/utils/get-posts';

const mapContentLayerBlog = (post?: Blog): Post | null => {
  if (!post) return null;
  return {
    slug: post.slug,
    title: post.title,
    date: post.date,
    hero: post.hero,
    excerpt: post.excerpt,
    color: post.color,
    link: post.link,
    readingTime: post.readingTime,
    inProgress: post.inProgress,
    keywords: post.keywords,
    tableOfContents: post.tableOfContents,
    body: post.body.raw,
  } as Post;
};

interface PostPageProps extends ComponentProps {
  post?: Blog;
}

const PostPage: Component<PostPageProps> = (props) => {
  const post = mapContentLayerBlog(props.post);
  const router = useRouter();
  const Component = useMemo(
    () =>
      props?.post?.body.code ? getMDXComponent(props.post?.body.code) : null,
    [props.post?.body.code],
  );

  if (!router.isFallback && !post?.slug) {
    return <FourHundredFour />;
  }

  if (post && post.link) {
    try {
      if (window) window.location.href = post.link;
    } catch (e) {}
  }

  if (!props.post || !props.post.body || !post || !Component) {
    return <ErrorPage />;
  }

  return (
    <Page
      title={
        post.title
          ? `${post.title} | Blog ~ Jahir Fiquitiva 💎`
          : 'Blog ~ Jahir Fiquitiva 💎'
      }
      description={post?.excerpt}
      keywords={post?.keywords}
      image={post.hero}
      siteType={'blog'}
      exactUrl={`https://jahir.dev/blog/${post.slug}`}
      metaImageStyle={'summary_large_image'}
    >
      {router.isFallback ? (
        <p>Loading…</p>
      ) : (
        <BlogPost {...post}>
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          <Component components={{ ...mdxComponents } as any} />
        </BlogPost>
      )}
    </Page>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getAllPosts().map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = getAllPosts().find((post) => post.slug === params?.slug);
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
