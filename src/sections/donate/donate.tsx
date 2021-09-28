import { DonateIntro } from '~/blocks/donate-intro';
import { DonateSupporters } from '~/blocks/donate-supporters';
import { Component } from '~/elements/base/fc';

export const Donate: Component = () => {
  return (
    <>
      <DonateIntro />
      <DonateSupporters />
    </>
  );
};
