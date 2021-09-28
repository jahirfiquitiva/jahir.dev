import styled from '@emotion/styled';

import { ContactForm } from '~/blocks/contact-form';
import { SectionHeading } from '~/components/section-heading';
import { ExtLink } from '~/elements/base/ext-link';
import { Component, ComponentProps } from '~/elements/base/fc';

const ContactSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;

const Paragraph = styled.p`
  margin: 0.8rem 0 0.4rem;
`;

interface ContactProps extends ComponentProps {
  reCaptchaKey?: string;
}

export const Contact: Component<ContactProps> = (props) => {
  return (
    <ContactSection>
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
      <ContactForm reCaptchaKey={props.reCaptchaKey} />
    </ContactSection>
  );
};
