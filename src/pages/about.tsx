import { Page } from '~/components/blocks';
import { About } from '~/components/sections';
import { Component } from '~/types';

const AboutPage: Component = () => {
  return (
    <Page
      title={'About ~ Jahir Fiquitiva 💎'}
      exactUrl={'https://jahir.dev/about'}
    >
      <About />
    </Page>
  );
};

export default AboutPage;
