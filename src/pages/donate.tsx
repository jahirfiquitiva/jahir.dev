import { Page } from '~/components/blocks';
import { Donate } from '~/components/sections';
import { Component } from '~/types';

const DonatePage: Component = () => {
  return (
    <Page
      title={'Donate ~ Jahir Fiquitiva 💎'}
      exactUrl={'https://jahir.dev/donate'}
    >
      <Donate />
    </Page>
  );
};

export default DonatePage;
