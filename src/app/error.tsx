/* eslint-disable @next/next/no-img-element */
'use client';

import { Link } from '@/components/link';
import { LinkButton } from '@/components/link-button';
import { Section } from '@/components/section';
import { getColoredTextClasses } from '@/utils/colored-text';
import { getStaticMetadata } from '@/utils/metadata';
import { buildOgImageUrl } from '@/utils/og';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ErrorComponent = (props: { error: Error }) => {
  const { error } = props;
  return (
    <Section id={'error'} className={'w-full h-full'}>
      <h1
        className={getColoredTextClasses(
          'red',
          'orange',
          'red',
          false,
          'mb-16',
        )}
      >
        Something went wrong
      </h1>
      <p>Unfortunately an unexpected error occurred.</p>
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
      {error ? (
        <details className={'rounded-8 border border-divider'}>
          <summary className={'select-none p-8'}>Error logs</summary>
          <div
            data-rehype-pretty-code-fragment
            className={'border-t border-divider p-12 max-w-full break-words'}
          >
            <pre data-language={'json'} className={'overflow-x-auto'}>
              <code
                data-language={'json'}
                className={'text-3xs font-mono max-w-full whitespace-pre-line'}
              >
                {JSON.stringify(
                  {
                    ...error,
                    message: error.message,
                    name: error.name,
                    cause: error.cause,
                    stack: error.stack,
                  },
                  null,
                  2,
                )}
              </code>
            </pre>
          </div>
        </details>
      ) : null}
      <LinkButton href={'/'} title={'Home page'} className={'mt-32'}>
        Go back home
      </LinkButton>
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
