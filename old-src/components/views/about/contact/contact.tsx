/* eslint-disable max-len */
import Icon from '@mdi/react';
import { useMemo } from 'react';

import { OpenDoodle } from '@/old/components/compounds';
import { Heading, Section, Link } from '@/old/components/core';
import { mdiEmail, telegram, twitterOutline } from '@/old/components/icons';
import { useHasMounted } from '@/old/hooks/use-has-mounted';
import { useRandomItem } from '@/old/hooks/use-random-item';
import type { FC } from '@/old/types';

import { images } from './contact.images';
import { ContactLink, ContactOptions, Grid } from './contact.styles';

// eslint-disable-next-line max-lines-per-function
export const Contact: FC = () => {
  const image = useRandomItem(images);
  const hasMounted = useHasMounted();

  const imageComponent = useMemo(() => {
    if (!hasMounted || !image) return null;
    return (
      <OpenDoodle
        src={image.src}
        alt={image.alt || 'Doodle'}
        placeholder={'blur'}
        priority
      />
    );
  }, [hasMounted, image]);

  return (
    <Section id={'contact'} css={{ gap: '$12' }}>
      <Heading as={'h2'} shadow={'brand'} gradient={'brand-to-blue'}>
        Contact
      </Heading>
      <Grid>
        {imageComponent}
        <div>
          <p>
            I&apos;m always open to chat, so please don&apos;t hesitate
            contacting me! But please{' '}
            <Link
              title={"Don't just say hello page"}
              href={'https://nohello.net/'}
            >
              don&apos;t just say hello
            </Link>
            .
          </p>
          <p>There&apos;s a few ways you can get it touch:</p>
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
