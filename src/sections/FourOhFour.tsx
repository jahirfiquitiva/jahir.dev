import { Heading, Link } from '@/components/atoms';
import { Section } from '@/components/elements';

export const FourOhFour = () => {
  return (
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
  );
};
