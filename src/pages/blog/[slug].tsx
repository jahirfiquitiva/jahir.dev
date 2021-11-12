import { GetStaticPaths, GetStaticProps } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { useMemo } from 'react';

import type { Blog } from '.contentlayer/types';
import { BlogPost } from '~/blocks/blog-post';
import { Page } from '~/blocks/page';
import { mdxComponents } from '~/new-components/mdx';
import { Component, ComponentProps, Post } from '~/types';
import { getAllPosts } from '~/utils/get-posts';

const mapContentLayerBlog = (post: Blog): Post => {
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
  } as Post;
};

interface PostPageProps extends ComponentProps {
  post: Blog;
}

const PostPage: Component<PostPageProps> = ({ post: basePost }) => {
  const MdxComponent = useMDXComponent(basePost.body.code);
  const post = useMemo(() => mapContentLayerBlog(basePost), [basePost]);

  return (
    <Page
      title={
        post?.title
          ? `${post?.title} | Blog ~ Jahir Fiquitiva 💎`
          : 'Blog ~ Jahir Fiquitiva 💎'
      }
      description={post?.excerpt}
      keywords={post?.keywords}
      image={post?.hero}
      siteType={'blog'}
      exactUrl={`https://jahir.dev/blog/${post?.slug}`}
      metaImageStyle={'summary_large_image'}
    >
      <BlogPost {...post}>
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        <MdxComponent components={{ ...mdxComponents } as any} />
      </BlogPost>
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
