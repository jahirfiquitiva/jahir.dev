/* eslint-disable @typescript-eslint/ban-ts-comment */
import { GetStaticPaths, GetStaticProps } from 'next';
import ErrorPage from 'next/error';
import { useRouter } from 'next/router';
import { staticRequest, getStaticPropsForTina } from 'tinacms';

import { BlogPost } from '~/blocks/blog-post/blog-post';
import { Page } from '~/blocks/page';
import { Component, ComponentProps } from '~/elements/base/fc';
import { FullBlogPost } from '~/types';
import {
  getPostDescription,
  getReadingTime,
  getTableOfContents,
} from '~/utils/get-post-data';

interface TinaData {
  title: string;
  excerpt?: string;
  hero?: string;
  date?: string;
  body?: string;
}

interface ComplexTinaData {
  getPostsDocument?: {
    data?: TinaData;
  };
}

interface BlogPostProps extends ComponentProps {
  slug: string;
  post?: FullBlogPost;
  data?: ComplexTinaData;
}

const getTinaData = (
  originalData?: ComplexTinaData,
): TinaData | undefined | null => {
  if (!originalData) return null;
  return originalData?.getPostsDocument?.data;
};

const buildFullBlogPostData = (
  tinaData?: TinaData | null,
): FullBlogPost | null => {
  if (!tinaData) return null;
  const { hero, body } = tinaData;
  const readingTime = getReadingTime(body);
  const actualHero: string = hero
    ? hero.startsWith('http')
      ? hero
      : `/static/images/posts/${hero}`
    : '';
  return {
    ...tinaData,
    readingTime,
    hero: actualHero,
    excerpt: getPostDescription(tinaData?.excerpt, body),
    tableOfContents: getTableOfContents(body),
    slug: '',
  } as FullBlogPost;
};

const getPostData = (
  slug: string,
  staticData?: FullBlogPost | null,
  tinaData?: ComplexTinaData,
): FullBlogPost => {
  const tinaPost = getTinaData(tinaData);
  const liveData = buildFullBlogPostData(tinaPost);
  return { ...staticData, ...liveData, slug } as FullBlogPost;
};

const BlogPostPage: Component<BlogPostProps> = (props) => {
  const { slug, data, post: staticData } = props;
  const post = getPostData(slug, staticData, data);
  const router = useRouter();

  if (!router.isFallback && !slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Page>{router.isFallback ? <p>Loading…</p> : <BlogPost {...post} />}</Page>
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

  const tinaPost = getTinaData(tinaProps?.data);
  const fullPostData = buildFullBlogPostData(tinaPost);
  return {
    props: {
      ...tinaProps,
      post: fullPostData,
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
