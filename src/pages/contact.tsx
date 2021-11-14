import { Page } from '~/components/blocks';
import { Contact } from '~/components/sections';
import { Component } from '~/types';

const ContactPage: Component = () => {
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
