import { Section } from '@/components/elements';
import type { FC, RandomPageImage } from '@/types';
import { styled } from '~/stitches';

import { DonateIntro } from './DonateIntro';

const DonateSection = styled(Section, {
  flex: 'unset',
  gap: 'calc($$verticalContentPadding / 2)',
});

export const Donate: FC<{ image: RandomPageImage }> = ({ image }) => {
  return (
    <>
      <DonateSection id={'donate'}>
        <DonateIntro image={image} />
      </DonateSection>
      <DonateSection id={'thanks'}></DonateSection>
    </>
  );
};
