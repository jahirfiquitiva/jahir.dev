/* eslint-disable @next/next/no-img-element */
import { useMemo } from 'react';

import { Heading, Link, LinkButton } from '@/components/atoms';
import { Section } from '@/components/elements';
import type { RainbowColors } from '@/stitches';
import type { GradientOption } from '@/stitches/utils/gradient';
import type { FC } from '@/types';
import { styled } from '~/stitches';

const Container = styled(Section, {
  alignItems: 'center',
  justifyContent: 'center',
  gap: 'calc($$verticalContentPadding / 2)',
  maxWidth: '50ch',
  mx: 'auto',
  textAlign: 'center',
  flex: 'unset',
  '& *': {
    mx: 'auto',
    alignSelf: 'unset',
  },
  variants: {
    fourOhFour: {
      true: {
        maxWidth: '45ch',
        flex: 1,
      },
    },
  },
});

const Content = styled(Container, {
  gap: 'calc($$verticalContentPadding / 3)',
  flex: 'unset',
});

const Gif = styled('img', {
  mx: 'auto',
  maxWidth: '425px',
  variants: {
    fourOhFour: {
      true: {
        filter: 'drop-shadow(0 0 1px #fff)',
        mb: '-$$verticalContentPadding',
      },
    },
  },
});

interface ErrorSectionProps {
  type: '404' | 'error' | 'construction';
  title: string;
  gif: string;
  gifAlt: string;
  shadow?: RainbowColors;
  gradient?: GradientOption;
}

const ErrorSection: FC<ErrorSectionProps> = (props) => {
  const isFourOhFour = useMemo(() => props.type === '404', [props.type]);
  return (
    <Section id={'error'} centered css={{ gap: '$$verticalContentPadding' }}>
      <Container as={'div'} fourOhFour={isFourOhFour}>
        <Heading
          as={'h2'}
          shadow={props.shadow || 'red'}
          gradient={props.gradient || 'orange-to-red'}
        >
          {props.title}
        </Heading>
        <Content>{props.children}</Content>
        <LinkButton href={'/'} title={'Home page'}>
          Go back home
        </LinkButton>
      </Container>
      <Gif
        src={props.gif}
        alt={props.gifAlt}
        loading={'lazy'}
        decoding={'async'}
        fourOhFour={isFourOhFour}
      />
    </Section>
  );
};

export const FourOhFour: FC = () => {
  return (
    <ErrorSection
      type={'404'}
      title={'Woops! ~ Page not found'}
      gif={'/static/images/site/404.gif'}
      gifAlt={'John Travolta'}
    >
      <p>
        Unfortunately, the page you&apos;re looking for doesn&apos;t exist or
        has been moved.
      </p>
      <p>Please double check the URL for typos. Otherwise,</p>
    </ErrorSection>
  );
};

export const Error: FC<{ error?: string }> = (props) => {
  return (
    <ErrorSection
      type={'error'}
      title={'Woops! ~ Something went wrong'}
      gif={'/static/images/site/monkey.gif'}
      gifAlt={'Monkey throwing laptop aggressively'}
    >
      <p>Unfortunately an unexpected error occurred.</p>
      {props.error ? (
        <pre>
          <code>{props.error}</code>
        </pre>
      ) : null}
      <p>
        Please{' '}
        <Link
          title={'Create issue on GitHub'}
          href={'https://github.com/jahirfiquitiva/jahir.dev'}
        >
          let me know
        </Link>{' '}
        about this issue, so that I can fix it.
      </p>
    </ErrorSection>
  );
};

export const UnderConstruction: FC = () => {
  return (
    <ErrorSection
      type={'construction'}
      title={'Site under (re)construction!'}
      gif={'/static/images/site/construction.gif'}
      gifAlt={'Person building a house and falling'}
      shadow={'yellow'}
      gradient={'yellow-to-orange'}
    >
      <p>
        Please bear with me as I work really hard to bring this site (back) to
        life
      </p>
    </ErrorSection>
  );
};
