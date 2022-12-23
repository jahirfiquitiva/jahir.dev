import type { GetStaticProps, NextPage } from 'next';
import { useMDXComponent, useLiveReload } from 'next-contentlayer/hooks';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

import { Loading } from '@/components/compounds';
import { MdxContent, mdxComponents } from '@/components/mdx';
import { Layout, Seo } from '@/components/molecules';
import { Error, FourOhFour as FourOhFourSection } from '@/components/sections';
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
  useLiveReload();
  const { post: basePost } = props;
  const MdxComponent = useMDXComponent(basePost.body.code);
  const router = useRouter();
  const post = useMemo(() => mapContentLayerBlog(basePost), [basePost]);

  const renderContent = () => {
    if (!router.isFallback && !post?.slug) {
      return <FourOhFourSection />;
    }
    if (router.isFallback) {
      return <Loading css={{ m: 'auto' }} />;
    }
    if (!post || !MdxComponent) {
      return <Error />;
    }
    return (
      <MdxContent contentType={'blog'} content={post as Post}>
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        <MdxComponent components={{ ...mdxComponents } as any} />
      </MdxContent>
    );
  };

  return (
    <Layout>
      <Seo
        title={'Uses – Jahir Fiquitiva'}
        description={
          'Get to know the hardware, software and tools I use on a daily basis'
        }
        exactUrl={'https://jahir.dev/uses'}
        keywords={[
          'hardware',
          'software',
          'apps',
          'tools',
          'extensions',
          'stack',
          'website',
          'tech',
        ]}
      />
      {renderContent()}
    </Layout>
  );
};

export default PostPage;

export const getStaticProps: GetStaticProps = async () => {
  const post = getAllPosts([], true).find((post) => post.slug === 'uses');
  return { props: { post } };
};
