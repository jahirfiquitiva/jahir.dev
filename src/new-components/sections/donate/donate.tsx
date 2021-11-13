import { DonateIntro } from './donate-intro';
import { Supporters } from './supporters';

import { Component } from '~/types';

export const Donate: Component = () => {
  return (
    <>
      <DonateIntro />
      <Supporters />
    </>
  );
};
