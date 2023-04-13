/* eslint-disable @next/next/no-img-element */
'use client';

import { Heading } from '@/components/core/heading';
import { ButtonLink, Link } from '@/components/core/link';
import { Section } from '@/components/core/section';
import { getStaticMetadata } from '@/utils/metadata';
import { buildOgImageUrl } from '@/utils/og';

const ErrorComponent = (props: { error: Error }) => {
  const { error } = props;
  return (
    <Section id={'error'} className={'w-full h-full'}>
      <Heading shadow={'red'} from={'orange'} to={'red'} className={'mb-16'}>
        Something went wrong
      </Heading>
      <p>Unfortunately an unexpected error occurred.</p>
      {error ? (
        <pre>
          <code>{JSON.stringify(error, null, 2)}</code>
        </pre>
      ) : null}
      <p>
        Please{' '}
        <Link
          title={'Create issue on GitHub'}
          href={
            'https://github.com/jahirfiquitiva/jahir.dev/issues/new?assignees=jahirfiquitiva&labels=bug&template=1_bug_report.yaml'
          }
        >
          let me know
        </Link>{' '}
        about this issue, so that I can fix it.
      </p>
      <ButtonLink href={'/'} title={'Home page'} className={'mt-32'}>
        Go back home
      </ButtonLink>
      <img
        src={'/static/images/site/monkey.gif'}
        alt={'Monkey throwing laptop aggressively'}
        loading={'lazy'}
        decoding={'async'}
        className={'mt-32 max-w-[425px]'}
      />
    </Section>
  );
};

export default ErrorComponent;

export const metadata = getStaticMetadata({
  // TODO: Use error code in title
  title: 'Error: 500!',
  description: 'An unexpected error occurred.',
  image: buildOgImageUrl('error'),
});
