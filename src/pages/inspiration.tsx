import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { SWRConfig } from 'swr';

import { Layout } from '@/components/elements';
import fetcher from '@/lib/fetcher';
import { InspirationItem } from '@/lib/notion';
import { Inspiration as InspirationSection } from '@/sections';

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
      <SWRConfig value={{ fallback }}>
        <InspirationSection />
      </SWRConfig>
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
