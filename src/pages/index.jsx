import Head from 'next/head';
import { styled } from '../../stitches.config';
import StitchesLogo from '@/components/StitchesLogo';

const Box = styled('div', {});

const Text = styled('p', {
  fontFamily: '$system',
  color: '$hiContrast',
});

const Link = styled('a', {
  fontFamily: '$system',
  textDecoration: 'none',
  color: '$purple600',
});

const Button = styled('button', {
  backgroundColor: '$accent',
});

const Container = styled('div', {
  mx: 'auto',
  py: '$3',

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
    <Box css={{ paddingY: '$6' }}>
      <Head>
        <title>Use Stitches with Next.js</title>
      </Head>
      <Container size={{ '@initial': '1', '@tablet-md': '2' }}>
        <StitchesLogo />
        <Text as='h1'>Hello, from Stitches.</Text>
        <Text>
          For full documentation, visit <Link href='https://stitches.dev'>stitches.dev</Link>.
        </Text>
        <Button>
          <span>Click</span>
        </Button>
      </Container>
    </Box>
  );
}
