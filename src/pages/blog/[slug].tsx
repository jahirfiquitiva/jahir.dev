/* eslint-disable @typescript-eslint/ban-ts-comment */
import { GetStaticPaths, GetStaticProps } from 'next';
import ErrorPage from 'next/error';
import { useRouter } from 'next/router';
import { staticRequest, getStaticPropsForTina } from 'tinacms';

import { BlogPost } from '~/blocks/blog-post';
import { Page } from '~/blocks/page';
import { Component, ComponentProps } from '~/elements/fc';
import { FullBlogPost } from '~/types/blog-post';
import {
  getPostDescription,
  getReadingTime,
  getTableOfContents,
} from '~/utils/get-posts';

interface BlogPostProps extends ComponentProps {
  slug: string;
  post: FullBlogPost;
  data: unknown;
}

export const BlogPostPage: Component<BlogPostProps> = (props) => {
  const { post, data, slug } = props;
  const tinaPost = data?.getPostsDocument?.data;
  const router = useRouter();

  if (!router.isFallback && !slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Page>
      {router.isFallback ? (
        <p>Loading…</p>
      ) : (
        <BlogPost {...post} {...tinaPost} hero={post?.hero} content={tinaPost?.body} />
      )}
    </Page>
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
            hero
            body
          }
        }
      }
    `,
    variables,
  });

  const initialPostData = tinaProps.data.getPostsDocument.data;
  const { hero, body } = initialPostData;
  const readingTime = getReadingTime(body);
  const actualHero: string = hero
    ? hero.startsWith('http')
      ? hero
      : `/static/images/posts/${hero}`
    : '';
  const post: FullBlogPost = {
    ...initialPostData,
    readingTime,
    hero: actualHero,
    excerpt: getPostDescription(body),
    tableOfContents: getTableOfContents(body),
    content: body,
    slug,
  };

  return {
    props: {
      ...tinaProps, // {data: {...}, query: '...', variables: {...}}
      post,
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
