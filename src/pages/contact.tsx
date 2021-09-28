import { GetStaticProps } from 'next';
import { FC } from 'react';

import { Page } from '~/blocks/page';
import { Contact } from '~/sections/contact';

interface ContactPageProps {
  reCaptchaKey?: string;
}

const ContactPage: FC<ContactPageProps> = (props) => {
  return (
    <Page title={'Contact ~ Jahir Fiquitiva 💎'}>
      <Contact reCaptchaKey={props.reCaptchaKey} />
    </Page>
  );
};

export default ContactPage;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      reCaptchaKey: process.env.RECAPTCHA_KEY || '0',
    },
  };
};
