/* eslint-disable @next/next/no-img-element */
import cx from 'classix';

import { Heading } from '@/components/core/heading';
import { ButtonLink } from '@/components/core/link/button-link';
import { Section } from '@/components/core/section';
import { getStaticMetadata } from '@/utils/metadata';
import { buildOgImageUrl } from '@/utils/og';

const NotFound = () => {
  return (
    <Section id={'error'} className={'w-full h-full'}>
      <Heading shadow={'red'} from={'orange'} to={'red'} className={'mb-16'}>
        Woops! ~ Page not found
      </Heading>
      <p>
        Unfortunately, the page you&apos;re looking for doesn&apos;t exist or
        has been moved.
      </p>
      <p>Please double check the URL for typos. Otherwise,</p>
      <ButtonLink
        href={'/'}
        title={'Home page'}
        className={'mt-32'}
        data-umami-event={'back-home-from-not-found'}
      >
        Go back home
      </ButtonLink>
      <img
        src={'/static/images/site/404.gif'}
        alt={'John Travolta gif'}
        loading={'lazy'}
        decoding={'async'}
        className={cx(
          'drop-shadow-[0_0_2px_#fff] mt-auto mx-auto w-full max-w-[425px]',
          'mb-[calc(var(--verticalContentPadding)*-1)]',
        )}
      />
    </Section>
  );
};

export default NotFound;

export const metadata = getStaticMetadata({
  title: 'Page not found',
  description: "The page you're looking for doesn't exist or has been moved.",
  keywords: ['404', 'not found', 'page not found'],
  image: buildOgImageUrl('404'),
});
