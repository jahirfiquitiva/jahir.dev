import styled from '@emotion/styled';
import { useMemo } from 'react';

import {
  Heading,
  Link,
  CenteredSection,
  Image,
} from '~/components/atoms/simple';
import random from '~/lib/random';
import { Component, mediaQueries } from '~/types';

const Grid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 2.4rem;
  margin-bottom: 1rem;

  ${mediaQueries.tablet.sm} {
    grid-template-columns: 51% 1fr;
  }
`;

const ContactOptionsContainer = styled.div`
  margin-top: 1.6rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.8rem;
`;

const ContactOptions = styled.ul`
  list-style: disc;
  line-height: 2;
  padding-inline-start: 1.2rem;
`;

const Illustration = styled(Image)`
  max-width: 320px;
  margin: 0 auto !important;

  ${mediaQueries.tablet.sm} {
    max-width: unset;
  }

  & > img {
    max-width: 320px;
    margin: 0 auto !important;
    ${mediaQueries.tablet.sm} {
      max-width: unset;
    }
  }
`;

const EmailLink = styled(Link)`
  color: #d33c30;
  &:hover,
  &:focus {
    color: #a42f25;
  }
  .dark & {
    color: #ec5649;
    &:hover,
    &:focus {
      color: #f07b72;
    }
  }
`;

const TwitterLink = styled(Link)`
  color: #1a91da;
  &:hover,
  &:focus {
    color: #1471a9;
  }
  .dark & {
    color: #1da1f2;
    &:hover,
    &:focus {
      color: #4ab4f5;
    }
  }
`;

const TelegramLink = styled(Link)`
  color: #007ab8;
  &:hover,
  &:focus {
    color: #005f8f;
  }
  .dark & {
    color: #33a0d6;
    &:hover,
    &:focus {
      color: #66b8e0;
    }
  }
`;

const DiscordLink = styled(Link)`
  color: #5865f2;
  &:hover,
  &:focus {
    color: #4651c2;
  }
  .dark & {
    color: #6974f3;
    &:hover,
    &:focus {
      color: #8a93f6;
    }
  }
`;

type ContactImage = {
  key: string;
  alt: string;
};

const allContactImages: Array<ContactImage> = [
  {
    key: '0',
    alt: 'Illustration of a person within a box',
  },
  {
    key: '1',
    alt: 'Illustration of a person dancing',
  },
  {
    key: '2',
    alt: 'Illustration of a person meditating',
  },
  {
    key: '3',
    alt: 'Illustration of a person sitting on the floor',
  },
  {
    key: '4',
    alt: 'Illustration of a person reading a book',
  },
  {
    key: '5',
    alt: 'Illustration of a person listening to music',
  },
  {
    key: '6',
    alt: 'Illustration of a person walking',
  },
  {
    key: '7',
    alt: 'Illustration of a person walking like a zombie',
  },
  {
    key: '8',
    alt: 'Illustration of a person taking a selfie with a t-shirt that says hi',
  },
];

export const Contact: Component = () => {
  const contactImage = useMemo<ContactImage>(() => {
    return random(allContactImages);
  }, []);

  return (
    <CenteredSection id={'contact'}>
      <Heading size={'3'} shadowColor={'brand'} gradientColor={'brand-to-blue'}>
        Contact
      </Heading>
      <Grid>
        <ContactOptionsContainer>
          <p>
            I&apos;m always open for a conversation, so please don&apos;t
            hesitate contacting me!
          </p>
          <p>
            Anyways, please{' '}
            <Link
              href={'https://nohello.club/'}
              title={"Link to don't just say hello club page"}
            >
              don&apos;t just say hello
            </Link>
            .
          </p>
          <p>There&apos;s a few ways you can get it touch:</p>
          <ContactOptions>
            <li>
              <EmailLink
                title={'Link to compose an email to Jahir'}
                href={'mailto:hola@jahir.dev?subject=Hi%20Jahir!'}
              >
                Email
              </EmailLink>
            </li>
            <li>
              <TwitterLink
                title={'Link to compose a Twitter direct message for Jahir'}
                href={'https://jahir.xyz/twitterdm'}
              >
                Twitter Direct Messages
              </TwitterLink>
            </li>
            <li>
              <TelegramLink
                title={"Link to Jahir's Telegram profile"}
                href={'https://jahir.xyz/tlgrm'}
              >
                Telegram
              </TelegramLink>
            </li>
            <li>
              <Link
                title={"Link to Jahir's Ask me Anything on GitHub"}
                href={
                  'https://github.com/jahirfiquitiva/jahir.dev/discussions/new?category=q-a'
                }
              >
                Ask me Anything (on GitHub)
              </Link>
            </li>
          </ContactOptions>
          <p>
            Although if it&apos;s related to{' '}
            <Link title={'Link to dashbud page'} href={'https://dashbud.dev'}>
              my dashboards
            </Link>
            , I would rather you{' '}
            <DiscordLink
              title={'Link to dashboards Discord server'}
              href={'https://discordapp.com/invite/78h7xgj'}
            >
              send a message on Discord
            </DiscordLink>
            .
          </p>
        </ContactOptionsContainer>
        <Illustration
          src={`/static/images/contact/${contactImage.key}.png`}
          alt={contactImage.alt}
          size={384}
          layout={'responsive'}
          priority
        />
      </Grid>
    </CenteredSection>
  );
};
