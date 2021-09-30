/* eslint-disable @typescript-eslint/ban-ts-comment */
import matter from 'gray-matter';
import { GetStaticPaths, GetStaticProps } from 'next';
import ErrorPage from 'next/error';
import { useRouter } from 'next/router';
import { staticRequest, getStaticPropsForTina } from 'tinacms';

import { BlogPost } from '~/blocks/blog-post/blog-post';
import { Page } from '~/blocks/page';
import { Component, ComponentProps } from '~/elements/base/fc';
import { FullBlogPost, defaultKeywords } from '~/types';
import {
  getPostDescription,
  getReadingTime,
  getTableOfContents,
} from '~/utils/get-post-data';
import { getPostSlugs } from '~/utils/get-posts';
import { unique } from '~/utils/unique';

interface TinaData {
  title: string;
  excerpt?: string;
  hero?: string;
  date?: string;
  body?: string;
  keywords?: string;
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
  const { hero, body, keywords } = tinaData;
  const readingTime = getReadingTime(body);
  const actualHero: string = hero
    ? hero.startsWith('http')
      ? hero
      : `https://jahir.dev/static/images/posts/${hero}`
    : '';
  // @ts-ignore
  const filteredKeywords = (keywords || '')
    .split('|')
    ?.map((it: string) => it.trim())
    ?.filter((it: string) => it.length > 0);
  const uniqueKeywords = unique([...filteredKeywords, ...defaultKeywords]);
  return {
    ...tinaData,
    readingTime,
    hero: actualHero,
    excerpt: getPostDescription(tinaData?.excerpt, body),
    tableOfContents: getTableOfContents(body),
    keywords: uniqueKeywords,
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
      {router.isFallback ? <p>Loading…</p> : <BlogPost {...post} />}
    </Page>
  );
};

export default BlogPostPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // @ts-ignore
  const { slug } = params;
  const variables = { relativePath: `${slug}.md` };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let tinaProps: any = {};
  try {
    tinaProps = await getStaticPropsForTina({
      query: `
      query BlogPostQuery($relativePath: String!) {
        getPostsDocument(relativePath: $relativePath) {
          data {
            title
            excerpt
            date
            hero
            body
            keywords
          }
        }
      }
    `,
      variables,
    });
  } catch (e) {}

  const content = await import(`./../../../posts/${slug}.md`);
  const defaultData = matter(content.default);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { orig, ...staticData } = defaultData;
  const actualStaticData: TinaData = {
    ...staticData,
    ...staticData?.data,
    title: staticData.data.title,
    body: staticData.content,
  };

  const tinaPost = getTinaData(tinaProps?.data);
  const fullPostData = buildFullBlogPostData({
    ...actualStaticData,
    ...tinaPost,
  });
  return {
    props: {
      ...tinaProps,
      post: fullPostData,
      slug,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let tinaPaths: Array<string> = [];
  try {
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
    tinaPaths = [
      // @ts-ignore
      ...postsListData.getPostsList.edges.map((edge) => edge.node.sys.filename),
    ];
  } catch (e) {}

  const blogSlugs = getPostSlugs().map((preSlug) => {
    return preSlug.replace(/^.*[\\/]/, '').slice(0, -3);
  });

  const allPaths = unique([...tinaPaths, ...blogSlugs]);
  return {
    paths: allPaths.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
};
