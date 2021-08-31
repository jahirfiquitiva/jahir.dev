/* eslint-disable @typescript-eslint/ban-ts-comment */
import { GetStaticPaths, GetStaticProps } from 'next';
import ErrorPage from 'next/error';
import { useRouter } from 'next/router';
import { staticRequest, getStaticPropsForTina } from 'tinacms';

import { BlogPost } from '~/blocks/blog-post';
import { Page } from '~/blocks/page';
import { Component, ComponentProps } from '~/elements/fc';
import { FullBlogPost } from '~/types/blog-post';

interface BlogPostProps extends ComponentProps {
  slug?: string;
  data: {
    getPostsDocument: {
      data: FullBlogPost;
    };
  };
}

export const BlogPostPage: Component<BlogPostProps> = (props) => {
  const { data, slug } = props;
  const post = data?.getPostsDocument?.data;
  const router = useRouter();

  if (!router.isFallback && !slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Page>{router.isFallback ? <p>Loading…</p> : <p>{post?.title}</p>}</Page>
  );
};

export default BlogPostPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // @ts-ignore
  const { slug } = params;
  const variables = { relativePath: `${slug}.md` };
  const tinaProps = await getStaticPropsForTina({
    query: `
      query BlogPostQuery($relativePath: String!) {
        getPostsDocument(relativePath: $relativePath) {
          data {
            title
            excerpt
            date
            coverImage
            author {
              name
              picture
            }
            ogImage {
              url
            }
            body
          }
        }
      }
    `,
    variables,
  });

  return {
    props: {
      ...tinaProps, // {data: {...}, query: '...', variables: {...}}
      slug,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const postsListData = await staticRequest({
    query: `
      query {
        getPostsList {
          edges {
            node {
            sys {
              filename
              }
            }
          }
      }
    }
    `,
    variables: {},
  });
  return {
    // @ts-ignore
    paths: postsListData.getPostsList.edges.map((edge) => ({
      params: { slug: edge.node.sys.filename },
    })),
    fallback: false,
  };
};
