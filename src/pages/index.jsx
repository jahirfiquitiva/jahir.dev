import Head from 'next/head';

import { Button, DotsDivider, Img, Link, Heading } from '@/components/atoms';
import { Layout } from '@/components/elements';
import { Intro, Skills } from '@/sections';
import { styled } from '~/stitches';

const Text = styled('p', {
  color: '$hiContrast',
});

const Container = styled('div', {
  mx: 'auto',
  py: '200px',

  variants: {
    size: {
      1: {
        maxWidth: '300px',
      },
      2: {
        maxWidth: '585px',
      },
      3: {
        maxWidth: '865px',
      },
    },
  },
});

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Use Stitches with Next.js</title>
      </Head>
      <Intro />
      <DotsDivider />
      <Container size={{ '@initial': '1', '@tablet-md': '2' }}>
        <Img
          src={'https://unavatar.io/jahirfiquitiva'}
          alt={'Jahir photo'}
          size={120}
        />
        <Heading as={'h2'} gradient={'blue-to-green'} forceGradient>
          Hello, from Jahir.
        </Heading>
        <Text>
          This is a Work In Progress. View the production website at{' '}
          <Link href={'https://jahir.dev'}>jahir.dev</Link>.
        </Text>
        <Button>
          <span>Click</span>
        </Button>
      </Container>
      <DotsDivider />
      <Skills />
    </Layout>
  );
}
