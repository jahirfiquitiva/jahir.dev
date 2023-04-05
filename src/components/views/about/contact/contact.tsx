/* eslint-disable max-len */
import { useMemo } from 'react';

import { OpenDoodle } from '@/components/compounds';
import { Heading, Section, Link } from '@/components/core';
import { useHasMounted } from '@/hooks/useHasMounted';
import { useRandomImage } from '@/hooks/useRandomImage';
import type { FC, RandomPageImage } from '@/types';

import {
  ContactOption,
  ContactOptions,
  Grid,
  Paragraph,
} from './contact.styles';

const imagesAlts: Array<string> = [
  'Person taking a selfie with a t-shirt that says hi',
  'Person laying on the floor and checking their phone',
  'Person reading a book',
  'Person walking like a zombie',
];

const images = imagesAlts.map((alt, key) => ({
  key,
  alt,
  width: 384,
  height: 384,
} as RandomPageImage));

// eslint-disable-next-line max-lines-per-function
export const Contact: FC = () => {
  const image = useRandomImage(images);
  const hasMounted = useHasMounted();

  const imageComponent = useMemo(() => {
    if (!hasMounted) return null;
    return (
      <OpenDoodle
        src={`/static/images/contact/${image.key}.png`}
        alt={image.alt || 'Doodle'}
        size={image.width || 384}
        priority
      />
    );
  }, [hasMounted, image]);

  return (
    <Section id={'contact'}>
      <Heading as={'h2'} shadow={'brand'} gradient={'brand-to-blue'}>
        Contact
      </Heading>
      <Grid>
        {imageComponent}
        <div>
          <Paragraph>
            I&apos;m always open to chat, so please don&apos;t hesitate
            contacting me!
          </Paragraph>
          <Paragraph>
            Anyways, please{' '}
            <Link
              title={"Don't just say hello page"}
              href={'https://nohello.net/'}
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
      </Grid>
    </Section>
  );
};
