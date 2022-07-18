/* eslint-disable max-len */
import { useMemo } from 'react';

import { Img, Link, Heading } from '@/components/atoms';
import { Section } from '@/components/elements';
import type { FC, ImageBlurDataObject } from '@/types';
import { getRandomItem } from '@/utils';
import { styled } from '~/stitches';
import { useHasMounted } from '@/hooks';

interface ContactImage {
  key: number;
  alt: string;
}

const possibleImages: Array<ContactImage> = [
  {
    key: 0,
    alt: 'Person within a box',
  },
  {
    key: 1,
    alt: 'Person dancing',
  },
  {
    key: 2,
    alt: 'Person meditating',
  },
  {
    key: 3,
    alt: 'Person sitting on the floor',
  },
  {
    key: 4,
    alt: 'Person reading a book',
  },
  {
    key: 5,
    alt: 'Person listening to music',
  },
  {
    key: 6,
    alt: 'Person walking',
  },
  {
    key: 7,
    alt: 'Person walking like a zombie',
  },
  {
    key: 8,
    alt: 'Person taking a selfie with a t-shirt that says hi',
  },
];

const Grid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1fr)',
  gap: '$$verticalContentPadding',
  my: 'calc($$verticalContentPadding / 2)',
  '@tablet-sm': {
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    alignItems: 'center',
  },
  '& > div:first-of-type': {
    display: 'flex',
    flexDirection: 'column',
    gap: '$10',
  },
});

const Paragraph = styled('p', {
  color: '$text-secondary',
  fontSize: '$xs',
});

const ContactOptions = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
  maxWidth: 212,
  '@tablet-sm': {
    maxWidth: '100%',
  },
});

const ContactOption = styled(Link, {
  $$linkColor: '$colors$text-secondary',
  display: 'flex',
  gap: '$3',
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
export const Contact: FC<{ blurData?: ImageBlurDataObject }> = (props) => {
  const { blurData } = props;
  const hasMounted = useHasMounted();
  const rightImage = useMemo<ContactImage>(() => {
    return getRandomItem(possibleImages);
  }, []);

  const imageComponent = useMemo(() => {
    if (!hasMounted) return null;
    const imageBlurData = blurData?.[rightImage.key];
    return (
      <Img
        src={`/static/images/contact/${rightImage.key}.png`}
        alt={rightImage.alt}
        size={imageBlurData?.width || 384}
        placeholder={'blur'}
        blurDataURL={imageBlurData?.base64 || ''}
        css={{ width: '100%', height: 'auto', maxWidth: 320, mx: 'auto' }}
        priority
      />
    );
  }, [hasMounted, rightImage, blurData]);

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
          <Paragraph css={{ mt: '$12' }}>
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
        {imageComponent}
      </Grid>
    </Section>
  );
};
