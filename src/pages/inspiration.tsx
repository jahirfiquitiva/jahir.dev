import { allInspirationItems } from '.contentlayer/data';
import { Page } from '~/components/blocks';
import { Inspiration, InspirationProps } from '~/components/sections';
import { Component } from '~/types';

const InspirationPage: Component<InspirationProps> = () => {
  return (
    <Page
      title={'Inspiration ~ Jahir Fiquitiva 💎'}
      exactUrl={'https://jahir.dev/inspiration'}
    >
      <Inspiration inspirationItems={allInspirationItems} />
    </Page>
  );
};

export default InspirationPage;
