import { FC } from 'react';

import { Page } from '~/components/blocks';
import { Contact } from '~/components/sections';

const ContactPage: FC = () => {
  return (
    <Page
      title={'Contact ~ Jahir Fiquitiva 💎'}
      exactUrl={'https://jahir.dev/contact'}
    >
      <Contact />
    </Page>
  );
};

export default ContactPage;
