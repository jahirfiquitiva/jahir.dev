import { Section } from '@/components/elements';
import type { FC, RandomPageImage } from '@/types';
import { styled } from '~/stitches';

import { DonateButtons } from './DonateButtons';
import { DonateIntro } from './DonateIntro';

const DonateSection = styled(Section, {
  flex: 'unset',
  gap: 'calc($$verticalContentPadding / 1.5)',
});

export const Donate: FC<{ image: RandomPageImage }> = ({ image }) => {
  return (
    <>
      <DonateSection id={'donate'}>
        <DonateIntro image={image} />
        <div>
          <DonateButtons />
        </div>
      </DonateSection>
      <DonateSection id={'thanks'}></DonateSection>
    </>
  );
};
