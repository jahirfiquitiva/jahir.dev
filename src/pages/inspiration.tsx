import { Page } from '~/components/blocks';
import { Inspiration } from '~/components/sections';
import { Component } from '~/types';

const InspirationPage: Component = () => {
  return (
    <Page
      title={'Inspiration ~ Jahir Fiquitiva 💎'}
      exactUrl={'https://jahir.dev/inspiration'}
    >
      <Inspiration />
    </Page>
  );
};

export default InspirationPage;
