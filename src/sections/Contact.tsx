/* eslint-disable max-len */
import { useMemo } from 'react';

import { Img, Link, Heading } from '@/components/atoms';
import { Section } from '@/components/elements';
import type { FC } from '@/types';
import { getRandomItem } from '@/utils';
import { styled } from '~/stitches';

interface ContactImage {
  key?: string | number;
  alt?: string;
  blurDataURL?: string;
}

const possibleImages: Array<ContactImage> = [
  {
    key: '0',
    alt: 'Person within a box',
    blurDataURL:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAP0lEQVQImQE0AMv/AAAAAJ2armFebp2ZsgB2b4pJSEhoaG3LyOMAgYaeUmmcZnmqjYifAP38/5+3/3yGtpOLmk7HGexcP20oAAAAAElFTkSuQmCC',
  },
  {
    key: '1',
    alt: 'Person dancing',
    blurDataURL:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAP0lEQVQImQE0AMv/APb2/AMAEC0pNpSLsgCwqsFBRFhOV3eIhJIAl5KhaGZ5Wl1ve3eIAIKBkIuLlP///0VFRVFxF8WBFdp8AAAAAElFTkSuQmCC',
  },
  {
    key: '2',
    alt: 'Person meditating',
    blurDataURL:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAP0lEQVQImQE0AMv/AAAAAIqFlJOOmQAAAADa1uhaW2lYWWza2OwA7+z8iouYjo+b6eb0AOni+9bR3ern8P7+/4BjHtTXJ2pMAAAAAElFTkSuQmCC',
  },
  {
    key: '3',
    alt: 'Person sitting on the floor',
    blurDataURL:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAPElEQVQImWNgYGA4fepxb9ccBgiYN2vu4UNH//37z/Dx3f/eKavbZp668eA/w7ETz1Yd+L9wy6v9+y8BAIoHHfx9rJw2AAAAAElFTkSuQmCC',
  },
  {
    key: '4',
    alt: 'Person reading a book',
    blurDataURL:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAP0lEQVQImQE0AMv/AAAAAJeWq6envgAAAAD48vbN1vTBy+bl4OMAvbvK9fX2////2tfmAPPx//Dv+vDv+fDu/yKoJJ3bOWhkAAAAAElFTkSuQmCC',
  },
  {
    key: '5',
    alt: 'Person listening to music',
    blurDataURL:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAP0lEQVQImQE0AMv/AMfC2c3A3cK72fHn/wDRzeDIzN6+vsvKx9gA//r/YYW7dY+01szfAAAAAJacvZifu9zU7ch9IupjEN8AAAAAAElFTkSuQmCC',
  },
  {
    key: '6',
    alt: 'Person walking',
    blurDataURL:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAP0lEQVQImQE0AMv/AMvJ3ubb3dPL2wAAAADHvNCestXL0uf/+/8AAAAAR3m+ZIvDra/FALy735umxWmIxqSqzTTZHv5UkqlmAAAAAElFTkSuQmCC',
  },
  {
    key: '7',
    alt: 'Person walking like a zombie',
    blurDataURL:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAP0lEQVQImQE0AMv/AJSSnoqMolZkkXVqhACinKxMVXVKWIF5cYAAsK3DCgcVBAARlJKlAP///2dkdUE+T11dXVQPFgAQM9y2AAAAAElFTkSuQmCC',
  },
  {
    key: '8',
    alt: 'Person taking a selfie with a t-shirt that says hi',
    blurDataURL:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAO0lEQVQImWNYuHD93Pk7D+y99ffPf4a6os6EuLyK8vrc3CYGBgaGnKq1WcUz505cDOLMW3Fm+ZpLQBYAv1sXtlcPQBYAAAAASUVORK5CYII=',
  },
];

const Grid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1fr)',
  gap: '$$verticalContentPadding',
  '@tablet-sm': {
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  },
  '& > div:first-of-type': {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.6rem',
  },
});

const Paragraph = styled('p', {
  color: '$text-secondary',
  fontSize: '$xs',
});

const ContactOptions = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '.2rem',
  maxWidth: 212,
  '@tablet-sm': {
    maxWidth: '100%',
  },
});

const ContactOption = styled(Link, {
  $$linkColor: '$colors$text-secondary',
  display: 'flex',
  gap: '.2rem',
  color: '$text-secondary',
  justifyContent: 'space-between',
  '@tablet-sm': {
    maxWidth: 306,
    gap: '$$verticalContentPadding',
  },
  hocus: {
    textDecoration: 'none !important',
    color: '$text-primary',
    dark: { textDecoration: 'none', color: '$text-primary' },
    '& > span:last-of-type': {
      color: '$$linkColor',
      dark: { color: '$$linkColor' },
    },
  },
  '& > span:last-of-type': {
    color: '$text-tertiary',
  },
  variants: {
    email: {
      true: {
        $$linkColor: '#d33c30',
        dark: { $$linkColor: '#ec5649' },
        '& > span:last-of-type': {
          userSelect: 'none',
          pointerEvents: 'none',
        },
      },
    },
    twitter: {
      true: {
        $$linkColor: '#1a91da',
        dark: { $$linkColor: '#1da1f2' },
      },
    },
    telegram: {
      true: {
        $$linkColor: '#007ab8',
        dark: { $$linkColor: '#33a0d6' },
      },
    },
    github: {
      true: {
        $$linkColor: '$colors$text-secondary',
        dark: { $$linkColor: '$colors$text-secondary' },
      },
    },
  },
});

// eslint-disable-next-line max-lines-per-function
export const Contact: FC = () => {
  const rightImage = useMemo<ContactImage>(() => {
    return getRandomItem(possibleImages);
  }, []);

  return (
    <Section id={'contact'} centered>
      <Heading as={'h3'} shadow={'brand'} gradient={'brand-to-blue'}>
        Contact
      </Heading>
      <Grid>
        <div>
          <Paragraph>
            I&apos;m always open for a conversation, so please don&apos;t
            hesitate contacting me!
          </Paragraph>
          <Paragraph>
            Anyways, please{' '}
            <Link
              title={"Don't just say hello club page"}
              href={'https://nohello.club/'}
            >
              don&apos;t just say hello
            </Link>
            .
          </Paragraph>
          <Paragraph css={{ mt: '.8rem' }}>
            There&apos;s a few ways you can get it touch:
          </Paragraph>
          <ContactOptions>
            <ContactOption
              title={'Compose an email to Jahir'}
              href={'mailto:hola@jahir.dev?subject=Hi%20Jahir!'}
              email
            >
              <span>Email</span>
              <span>hola@jahir.dev</span>
            </ContactOption>
            <ContactOption
              title={'Compose a Twitter direct message for Jahir'}
              href={'https://jahir.xyz/twitterdm'}
              twitter
            >
              <span>Twitter</span>
              <span>@jahirfiquitiva</span>
            </ContactOption>
            <ContactOption
              title={"Jahir's Telegram profile"}
              href={'https://jahir.xyz/tlgrm'}
              telegram
            >
              <span>Telegram</span>
              <span>@jahirfiquitiva</span>
            </ContactOption>
            <ContactOption
              title={"Jahir's Ask me Anything on GitHub"}
              href={
                'https://github.com/jahirfiquitiva/jahir.dev/discussions/new?category=q-a'
              }
              github
            >
              <span>Ask me Anything</span>
              <span>on GitHub</span>
            </ContactOption>
          </ContactOptions>
        </div>
        <Img
          src={`/static/images/contact/${rightImage.key}.png`}
          alt={rightImage.alt}
          size={384}
          placeholder={'blur'}
          blurDataURL={rightImage.blurDataURL}
          css={{ width: '100%', height: 'auto', maxWidth: 320, mx: 'auto' }}
          priority
        />
      </Grid>
    </Section>
  );
};
