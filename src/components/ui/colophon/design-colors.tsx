import { Link } from '@/components/atoms/link';
import { Section } from '@/components/atoms/section';
import { tw } from '@/utils/cx';

const ColorSquare = tw.div`
  aspect-square
  flex flex-col
  items-center
  justify-center
  w-full select-none
  font-medium
`;

export const DesignAndColors = () => (
  <Section id={'design-colors'}>
    <h2 className={'text-lg -mb-2'}>Design & Colors</h2>
    <p className={'max-w-nice'}>
      I personally handpicked the brand&apos;s color palette. The design is a
      blend of{' '}
      <Link title={'inspiration'} href={'/inspiration'}>
        inspirations
      </Link>{' '}
      from various people and websites, tailored to my personal taste and
      enriched by valuable feedback from friends.
    </p>
    <div className={'grid grid-cols-6 tablet-sm:grid-cols-11 items-center'}>
      <ColorSquare className={'bg-brand-50 text-brand-950'}>50</ColorSquare>
      <ColorSquare className={'bg-brand-100 text-brand-950'}>100</ColorSquare>
      <ColorSquare className={'bg-brand-200 text-brand-950'}>200</ColorSquare>
      <ColorSquare className={'bg-brand-300 text-brand-950'}>300</ColorSquare>
      <ColorSquare className={'bg-brand-400 text-brand-950'}>400</ColorSquare>
      <ColorSquare className={'bg-brand-500 text-brand-50'}>500</ColorSquare>
      <ColorSquare className={'bg-brand-600 text-brand-50'}>600</ColorSquare>
      <ColorSquare className={'bg-brand-700 text-brand-50'}>700</ColorSquare>
      <ColorSquare className={'bg-brand-800 text-brand-50'}>800</ColorSquare>
      <ColorSquare className={'bg-brand-900 text-brand-50'}>900</ColorSquare>
      <ColorSquare className={'bg-brand-950 text-brand-50'}>950</ColorSquare>
    </div>
    {/* <small className={'text-tertiary-txt'}>
      When using this website&apos;s source code as a template, please make sure
      to update and change the colors and design to match your personal style.
    </small> */}
  </Section>
);
