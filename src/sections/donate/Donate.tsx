import { Section } from '@/components/elements';
import type { FC, RandomPageImage } from '@/types';
import { styled } from '~/stitches';

import { DonateButtons } from './DonateButtons';
import { DonateIntro } from './DonateIntro';
import { DonateStats } from './DonateStats';

const DonateSection = styled(Section, {
  flex: 'unset',
  gap: 'calc($$verticalContentPadding / 1.5)',
});

export const Donate: FC<{ image: RandomPageImage }> = ({ image }) => {
  return (
    <>
      <DonateSection id={'donate'}>
        <DonateIntro image={image} />
        <DonateButtons />
        <DonateStats />
      </DonateSection>
      <DonateSection id={'thanks'}></DonateSection>
    </>
  );
};
