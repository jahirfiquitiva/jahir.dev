import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { SWRConfig } from 'swr';

import { Heading } from '@/components/atoms';
import { Layout, Section } from '@/components/elements';
import fetcher from '@/lib/fetcher';
import { InspirationItem } from '@/lib/notion';
import { InspirationGrid } from '@/sections';

interface BookmarksResponse {
  success?: boolean;
  bookmarks?: Array<InspirationItem>;
}

interface InspirationProps {
  fallback?: BookmarksResponse;
}

const Inspiration: NextPage<InspirationProps> = ({ fallback }) => {
  return (
    <Layout>
      <Head>
        <title>Inspiration | Jahir Fiquitiva</title>
      </Head>
      <Section
        id={'inspiration'}
        css={{ gap: 'calc($$verticalContentPadding / 1.5)' }}
        centered
      >
        <Heading as={'h3'} shadow={'brand'} gradient={'brand-to-blue'}>
          Inspiration
        </Heading>
        <p>
          These are some sites that I like and that have somehow inspired part
          of my website and even some personal projects. 👏
        </p>
        <SWRConfig value={{ fallback }}>
          <InspirationGrid />
        </SWRConfig>
      </Section>
    </Layout>
  );
};

export default Inspiration;

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const bookmarks: BookmarksResponse = await fetcher(
      'https://jahir.dev/api/bookmarks',
    );
    return {
      props: {
        fallback: {
          '/api/bookmarks': {
            success: bookmarks.success,
            bookmarks: bookmarks.bookmarks?.filter((it) => !!it && !!it.link),
          },
        },
      },
    };
  } catch (e) {
    return {
      props: {},
    };
  }
};
