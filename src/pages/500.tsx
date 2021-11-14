import { Page, Error } from '~/components/blocks';
import { Component } from '~/types';

const ErrorPage: Component = () => {
  return (
    <Page
      title={'Error! ~ Jahir Fiquitiva 💎'}
      exactUrl={'https://jahir.dev/500'}
    >
      <Error />
    </Page>
  );
};

export default ErrorPage;
