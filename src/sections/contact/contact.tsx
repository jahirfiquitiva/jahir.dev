import styled from '@emotion/styled';

import { ContactForm } from '~/blocks/contact-form';
import { CenteredSection } from '~/blocks/section';
import { SectionHeading } from '~/components/section-heading';
import { Divider, Link } from '~/new-components/atoms/simple';
import { Component, ComponentProps } from '~/types';

const Paragraph = styled.p`
  margin: 0.8rem 0 0.4rem;
`;

interface ContactProps extends ComponentProps {
  reCaptchaKey?: string;
}

export const Contact: Component<ContactProps> = (props) => {
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
      <Divider thin />
      <ContactForm reCaptchaKey={props.reCaptchaKey} />
    </CenteredSection>
  );
};
