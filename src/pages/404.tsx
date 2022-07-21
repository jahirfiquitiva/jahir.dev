import type { NextPage } from 'next';
import Head from 'next/head';

import { Heading, Link } from '@/components/atoms';
import { Layout, Section } from '@/components/elements';

const FourOhFour: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Site not found</title>
      </Head>
      <Section id={'error'} centered css={{ gap: '$16' }}>
        <Heading as={'h2'} shadow={'red'} gradient={'red-to-purple'}>
          Site not found
        </Heading>
        <p>
          This is a Work In Progress. View the production website at{' '}
          <Link title={'Jahir production website'} href={'https://jahir.dev'}>
            jahir.dev
          </Link>
          .
        </p>
        <p>
          Alternatively,{' '}
          <Link href={'/'} title={'Home page'}>
            go back home
          </Link>
        </p>
      </Section>
    </Layout>
  );
};

export default FourOhFour;
