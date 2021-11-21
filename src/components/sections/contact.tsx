import { useMemo } from 'react';
import tw from 'twin.macro';

import { SectionHeading } from '~/components/atoms/complex';
import { Link, CenteredSection, Image } from '~/components/atoms/simple';
import random from '~/lib/random';
import { Component } from '~/types';

const Grid = tw.div`
  grid
  grid-cols-1
  gap-24
  mb-10

  md:(grid-template-columns[51% 1fr])
`;

const ContactOptionsContainer = tw.div`
  mt-16
  flex
  flex-col
  items-start
  gap-4
`;

const EmailLink = tw(Link)`
  color[#d33c30] hocus:(color[#a42f25])
  dark:(color[#ee695d] hocus:(color[#ea4335]))
`;

const TwitterLink = tw(Link)`
  color[#1a91da] hocus:(color[#1471a9])
  dark:(color[#1da1f2] hocus:(color[#1781c2]))
`;

const TelegramLink = tw(Link)`
  color[#007ab8] hocus:(color[#005f8f])
  dark:(color[#33a0d6] hocus:(color[#0088cc]))
`;

const DiscordLink = tw(Link)`
  color[#5865f2] hocus:(color[#4651c2])
  dark:(color[#8a93f6] hocus:(color[#6974f3]))
`;

const GitHubLink = tw(Link)`
  color[#333] hocus:(color[#292929])
  dark:(color[#ebebeb] hocus:(color[#fff]))
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
      <SectionHeading
        size={'3'}
        shadowColor={'brand'}
        gradientColor={'brand-to-blue'}
        emoji={'📬'}
      >
        Contact
      </SectionHeading>
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
          <ul tw={'list-disc leading-loose padding-inline-start[1.2rem]'}>
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
              <GitHubLink
                title={"Link to Jahir's Ask me Anything on GitHub"}
                href={
                  'https://github.com/jahirfiquitiva/jahir.dev/discussions/new?category=q-a'
                }
              >
                Ask me Anything (on GitHub)
              </GitHubLink>
            </li>
          </ul>
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
        <Image
          src={`/static/images/contact/${contactImage.key}.png`}
          alt={contactImage.alt}
          size={384}
          layout={'responsive'}
        />
      </Grid>
    </CenteredSection>
  );
};
