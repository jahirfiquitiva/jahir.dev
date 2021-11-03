import { getMDXComponent } from 'mdx-bundler/client';
import { GetStaticPaths, GetStaticProps } from 'next';
import ErrorPage from 'next/error';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

import type { Blog } from '.contentlayer/types';
import { BlogPost } from '~/blocks/blog-post';
import { Page } from '~/blocks/page';
import { MDXComponents as mdxComponents } from '~/components/mdx';
import { FullBlogPost } from '~/types';
import { getAllPosts } from '~/utils/get-posts';

const mapContentLayerBlog = (post: Blog): FullBlogPost => {
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
  } as FullBlogPost;
};

export default function Post(props: { post: Blog }) {
  const post = mapContentLayerBlog(props.post);
  const { slug } = post;
  const router = useRouter();
  const Component = useMemo(
    () => getMDXComponent(props.post.body.code),
    [props.post.body.code],
  );

  if (!router.isFallback && !slug) {
    return <ErrorPage statusCode={404} />;
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
      exactUrl={`https://jahir.dev/blog/${slug}`}
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
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getAllPosts().map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = getAllPosts().find((post) => post.slug === params?.slug);
  return { props: { post } };
};
