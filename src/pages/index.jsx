import { mdiPlayCircle } from '@mdi/js';
import Icon from '@mdi/react';
import Head from 'next/head';

import {
  Button,
  Divider,
  DotsDivider,
  Img,
  Link,
  Heading,
} from '@/components/atoms';
import { WavingHello } from '@/components/compounds';
import { Layout, Section } from '@/components/elements';
import StitchesLogo from '@/components/StitchesLogo';
import { styled } from '~/stitches';

const NameButton = styled(Button, {
  background: 'none',
  color: '$text-primary',
  p: 0,
  letterSpacing: 'unset',
  minHeight: 'unset',
  hocus: {
    background: 'none',
    transform: 'none',
  },
  '& > svg': {
    filter:
      'drop-shadow($$textShadowSize $$textShadowSize 0 $$textShadowColor)',
    dark: {
      filter: 'none',
      color: '$gradient-blue',
    },
  },
});

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

// eslint-disable-next-line max-lines-per-function
export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Use Stitches with Next.js</title>
      </Head>
      <Section>
        <WavingHello />
        <Heading as={'h1'} shadow={'blue'} css={{ fontSize: '$xl' }}>
          I am&nbsp;
          <NameButton title={"Press to hear Jahir's name pronunciation"}>
            <Heading
              as={'span'}
              gradient={'brand-to-blue'}
              css={{ fontSize: 'inherit', fontWeight: 800 }}
            >
              Jahir Fiquitiva
            </Heading>
            <Icon path={mdiPlayCircle} size={1.25} />
          </NameButton>
        </Heading>
        <Text>
          This is a Work In Progress. View the production website at{' '}
          <Link href={'https://jahir.dev'}>jahir.dev</Link>.
        </Text>
        <Button>
          <span>Click</span>
        </Button>
      </Section>
      <Divider />
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
      <Container size={{ '@initial': '1', '@tablet-md': '2' }}>
        <StitchesLogo />
        <Text as={'h1'}>
          Hello, from{' '}
          <Heading as={'span'} gradient={'orange-to-red'}>
            Jahir
          </Heading>
          .
        </Text>
        <Text>
          This is a Work In Progress. View the production website at{' '}
          <Link href={'https://jahir.dev'}>jahir.dev</Link>.
        </Text>
        <Button>
          <span>Click</span>
        </Button>
      </Container>
    </Layout>
  );
}
