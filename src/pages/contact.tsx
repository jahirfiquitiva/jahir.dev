import { FC } from 'react';

import { Page } from '~/new-components/blocks';
import { Contact } from '~/new-components/sections';

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
