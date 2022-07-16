import Head from 'next/head';

import { Link, Heading } from '@/components/atoms';
import { Section } from '@/components/elements';

export default function Home() {
  return (
    <>
      <Head>
        <title>Site not found</title>
      </Head>
      <Section id={'projects'}>
        <Heading as={'h3'} shadow={'red'} gradient={'red-to-purple'}>
          Site not found
        </Heading>
        <p>
          This is a Work In Progress. View the production website at{' '}
          <Link title={'Jahir production website'} href={'https://jahir.dev'}>
            jahir.dev
          </Link>
          .<br />
          Alternatively,{' '}
          <Link href={'/'} title={'Home page'}>
            go back home
          </Link>
        </p>
      </Section>
    </>
  );
}
