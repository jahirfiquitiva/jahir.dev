/* eslint-disable @next/next/no-img-element */
import { Img } from '@/components/atoms/img';
import { LinkButton } from '@/components/atoms/link-button';
import { Section } from '@/components/atoms/section';
import { getColoredTextClasses } from '@/utils/colored-text';
import { createMetadata } from '@/utils/metadata';

export default function NotFound() {
  return (
    <Section
      id={'error'}
      className={'flex-1 w-full h-full -mb-7 tablet-sm:-mb-8'}
    >
      <h1
        className={getColoredTextClasses(
          'red',
          'orange',
          'red',
          'mb-4 self-start',
        )}
      >
        Woops! ~ Page not found
      </h1>
      <p>
        Unfortunately, the page you&apos;re looking for doesn&apos;t exist or
        has been moved.
      </p>
      <p className={'-mt-3'}>
        Please double check the URL for typos. Otherwise,
      </p>
      <LinkButton href={'/'} title={'Home page'} className={'mt-1.5 mb-5'}>
        Go back home
      </LinkButton>
      <Img
        src={'/media/site/404.gif'}
        alt={'John Travolta gif'}
        className={'mt-auto mx-auto w-full'}
        style={{ maxWidth: 425, filter: 'drop-shadow(0 0 2px #fff)' }}
      />
    </Section>
  );
}

export const metadata = createMetadata({
  title: 'Page not found',
  description: "The page you're looking for doesn't exist or has been moved.",
  keywords: ['404', 'not found', 'page not found'],
  image: 'https://jahir.dev/404-og.png',
});
