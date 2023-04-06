import type { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { useMDXComponent, useLiveReload } from 'next-contentlayer/hooks';
import { useMemo } from 'react';

import { Loading } from '@/components/compounds';
import { MdxContent, mdxComponents } from '@/components/mdx';
import { Layout, Seo } from '@/components/molecules';
import { Error, FourOhFour as FourOhFourSection } from '@/components/views';
import type { Post } from '@/types';
import { buildOgImageUrl } from '@/utils/og';
import { getAllPosts } from '@/utils/posts/get-posts';
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
      <MdxContent content={post as Post}>
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
          'uses',
        ]}
        image={buildOgImageUrl('uses', 'Uses')}
      />
      {renderContent()}
    </Layout>
  );
};

export default PostPage;

export const getStaticProps: GetStaticProps = async () => {
  const post = getAllPosts().find(
    (post: { slug: string }) => post.slug === 'uses',
  );
  return { props: { post } };
};
