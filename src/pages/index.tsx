import type { NextPage } from 'next';
import Head from 'next/head';

import { Button, DotsDivider, Link, Heading } from '@/components/atoms';
import { Layout, Section } from '@/components/elements';
import { Intro, Skills } from '@/sections';

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Jahir Fiquitiva</title>
      </Head>
      <Intro />
      <DotsDivider />
      <Section id={'projects'}>
        <Heading as={'h3'} shadow={'red'} gradient={'red-to-purple'}>
          Featured projects
        </Heading>
        <p>
          This is a Work In Progress. View the production website at{' '}
          <Link title={'Jahir production website'} href={'https://jahir.dev'}>
            jahir.dev
          </Link>
          .
        </p>
        <Button>
          <span>Click</span>
        </Button>
      </Section>
      <DotsDivider />
      <Skills />
    </Layout>
  );
};

export default Home;
