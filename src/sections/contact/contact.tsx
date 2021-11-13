import styled from '@emotion/styled';

import { ContactForm } from '~/blocks/contact-form';
import { SectionHeading } from '~/new-components/atoms/complex';
import {
  Divider,
  Link,
  CenteredSection,
  Image,
} from '~/new-components/atoms/simple';
import { Component, ComponentProps, mediaQueries } from '~/types';

const Paragraph = styled.p`
  margin: 0.8rem 0 0.4rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  margin: 1rem 0;

  ${mediaQueries.tablet.sm} {
    grid-template-columns: 60% 1fr;
  }

  & span {
    max-width: 256px !important;
    margin: 0 auto !important;
    ${mediaQueries.tablet.sm} {
      max-width: unset !important;
    }
  }
`;

interface ContactProps extends ComponentProps {
  reCaptchaKey?: string;
}

export const Contact: Component<ContactProps> = (props) => {
  return (
    <CenteredSection id={'contact'}>
      <Grid>
        <div>
          <SectionHeading
            size={'3'}
            shadowColor={'brand'}
            gradientColor={'brand-to-blue'}
            emoji={'📬'}
          >
            Contact
          </SectionHeading>
          <Paragraph>
            <b>Don&apos;t hesitate contacting me!</b>
          </Paragraph>
          <Paragraph>
            PS: I also have open{' '}
            <Link
              title={'Link to compose a Twitter direct message for Jahir'}
              href={'https://jahir.xyz/twitterdm'}
            >
              Twitter DMs
            </Link>{' '}
            and{' '}
            <Link
              title={"Link to Jahir's Telegram profile"}
              href={'https://jahir.xyz/tlgrm'}
            >
              Telegram
            </Link>{' '}
            for any kind of inquiries. 😀
          </Paragraph>
          <Paragraph>
            Although if it&apos;s related to{' '}
            <Link title={'Link to dashbud page'} href={'https://dashbud.dev'}>
              my dashboards
            </Link>
            , I would rather you send a{' '}
            <Link
              title={'Link to dashboards Discord server'}
              href={'https://discordapp.com/invite/78h7xgj'}
            >
              message on Discord
            </Link>
          </Paragraph>
        </div>
        <Image
          src={'/static/images/contact/selfie-hi.png'}
          alt={'Illustration of a person taking a selfie'}
          width={384}
          height={512}
          objectFit={'contain'}
        />
      </Grid>
    </CenteredSection>
  );
};
