import { cx } from 'classix';

import { Heading } from '@/components/core/heading';
import { Link } from '@/components/core/link';
import { NoPaddingSection } from '@/components/core/section';
import { SponsorsList } from '@/components/views/donate/sponsors-list';
import { getSponsorsAndCategories } from '@/lib/sponsors/all';

import { SimpleSponsorsStats } from './sponsors-stats';

// Update data once every 12 hours
export const revalidate = 43200;

export default async function DynamicDonateContent() {
  const sponsors = await getSponsorsAndCategories().catch(null);
  return (
    <>
      <SponsorsList
        categories={sponsors?.categories || []}
        unicorns={sponsors?.unicorns || []}
      />
      <NoPaddingSection $as={'div'} className={'gap-8 my-24'}>
        <Heading $as={'h2'} className={'text-lg'}>
          Stats
        </Heading>
        <p>
          For transparency, these are the latest stats from{' '}
          <Link
            title={'Sponsor Jahir Fiquitiva on GitHub'}
            href={'https://github.com/sponsors/jahirfiquitiva'}
          >
            GitHub Sponsors
          </Link>{' '}
          and{' '}
          <Link
            href={'https://buymeacoffee.com/jahirfiquitiva'}
            title={'Buy Jahir a Pizza'}
          >
            Buy me a Coffee
          </Link>
        </p>
        <div
          className={cx(
            'max-w-full my-8',
            'grid grid-cols-2 gap-12',
            'tablet-sm:grid-cols-12 tablet-sm:gap-16',
          )}
        >
          <SimpleSponsorsStats
            sponsorsCount={sponsors.sponsorsCount}
            totalEarningsPerMonth={sponsors.totalEarningsPerMonth}
            small
          />
        </div>
      </NoPaddingSection>
    </>
  );
}