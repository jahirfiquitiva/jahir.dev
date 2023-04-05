/* eslint-disable max-len */
import Icon from '@mdi/react';
import { useMemo } from 'react';

import { OpenDoodle } from '@/components/compounds';
import { Heading, Section, Link, Paragraph } from '@/components/core';
import { useHasMounted } from '@/hooks/useHasMounted';
import { useRandomImage } from '@/hooks/useRandomImage';
import { mdiEmail, telegram, twitterOutline } from '@/icons';
import type { FC, RandomPageImage } from '@/types';

import { ContactLink, ContactOptions, Grid } from './contact.styles';

const imagesAlts: Array<string> = [
  'Person taking a selfie with a t-shirt that says hi',
  'Person laying on the floor and checking their phone',
  'Person reading a book',
  'Person walking like a zombie',
];

const images = imagesAlts.map(
  (alt, key) =>
    ({
      key,
      alt,
      width: 220,
      height: 220,
    } as RandomPageImage),
);

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
        size={image.width || 220}
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
            contacting me! But please{' '}
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
            <ContactLink
              title={'Compose an email to Jahir'}
              href={'mailto:hola@jahir.dev?subject=Hi%20Jahir!'}
              outlined
              css={{
                $$linkColor: '211 60 48',
                dark: { $$linkColor: '236 86 73' },
              }}
            >
              <Icon path={mdiEmail} size={0.95} />
              Email
            </ContactLink>
            <ContactLink
              title={'Compose a Twitter direct message for Jahir'}
              href={'https://jahir.xyz/twitterdm'}
              outlined
              css={{
                $$linkColor: '26 145 218',
                dark: { $$linkColor: '29 161 242' },
              }}
            >
              <Icon path={twitterOutline} size={0.9} />
              Twitter
            </ContactLink>
            <ContactLink
              title={"Jahir's Telegram profile"}
              href={'https://jahir.xyz/tlgrm'}
              outlined
              css={{
                $$linkColor: '0 122 184',
                dark: { $$linkColor: '51 160 214' },
              }}
            >
              <Icon path={telegram} size={0.85} />
              Telegram
            </ContactLink>
          </ContactOptions>
        </div>
      </Grid>
    </Section>
  );
};
