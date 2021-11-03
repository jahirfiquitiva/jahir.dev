import styled from '@emotion/styled';

import { ContactForm } from '~/blocks/contact-form';
import { CenteredSection } from '~/blocks/section';
import { SectionHeading } from '~/components/section-heading';
import { ExtLink } from '~/elements/base/ext-link';
import { Component, ComponentProps } from '~/elements/base/fc';
import { Divider } from '~/elements/simple/divider';

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
        <ExtLink to={'https://jahir.xyz/twitterdm'}>Twitter DMs</ExtLink> and{' '}
        <ExtLink to={'https://jahir.xyz/tlgrm'}>Telegram</ExtLink> for any kind
        of inquiries. 😀
      </Paragraph>
      <Paragraph>
        Although if it&apos;s related to{' '}
        <ExtLink to={'https://dashbud.dev'}>my dashboards</ExtLink>, I would
        rather you send a{' '}
        <ExtLink to={'https://discordapp.com/invite/78h7xgj'}>
          message on Discord
        </ExtLink>
      </Paragraph>
      <Divider thin />
      <ContactForm reCaptchaKey={props.reCaptchaKey} />
    </CenteredSection>
  );
};
