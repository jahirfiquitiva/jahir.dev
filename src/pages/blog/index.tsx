import type { GetStaticProps } from 'next';
import Head from 'next/head';

// import { About as AboutSection } from '@/sections';
import { Link } from '@/components/atoms';
import type { Post } from '@/types';
import { getAllPosts } from '@/utils';

import { type NextPageWithLayout } from './../_app';

interface BlogProps {
  posts?: Array<Post>;
}

const Blog: NextPageWithLayout<BlogProps> = (props) => {
  const { posts } = props;
  return (
    <>
      <Head>
        <title>Blog | Jahir Fiquitiva</title>
      </Head>
      <ul>
        {(posts || []).map((post) => {
          return (
            <li key={post.slug}>
              <Link
                title={post.title}
                href={post.link ? post.link : `/blog/${post.slug}`}
              >
                {post.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Blog;

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'hero',
    'excerpt',
    'color',
    'link',
    'readingTime',
    'inProgress',
    'year',
    'devToId',
    'heroMeta',
  ]);
  return {
    props: { posts: allPosts },
  };
};
