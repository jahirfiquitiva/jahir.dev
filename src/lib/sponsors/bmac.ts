import { groupBy } from '@/utils/posts/group-posts';

import type { ManualSponsor } from './manual-sponsors';
import type { Sponsor, SponsorCategory } from './types';

/* eslint-disable @typescript-eslint/ban-ts-comment */
const { BMAC_PAT: bmacPat = '' } = process.env;
const authHeaders =
  bmacPat && bmacPat.length > 0 ? { Authorization: `Bearer ${bmacPat}` } : {};

type BmacMemberTier = 'star' | 'ball' | 'rocket' | 'diamond';
const membershipIds: Record<number, BmacMemberTier> = {
  118652: 'star',
  628: 'ball',
  118654: 'rocket',
  118655: 'diamond',
};

interface BmacSupporter {
  payer_name: string;
  payer_email: string;
  is_refunded?: boolean | null;
  supporter_name?: string;
}

interface OneTimeSupporter extends BmacSupporter {
  support_coffee_price: string;
  support_coffees: number;
  support_updated_on: string;
}

interface Member extends BmacSupporter {
  membership_level_id: number;
  stripe_status: string | 'active';
  subscription_updated_on: string;
  subscription_coffee_price: string;
  subscription_coffee_num: number;
  subscription_duration_type: 'month' | 'year';
}

interface BmacResponse<T> {
  current_page: number;
  data?: Array<T>;
  next_page_url?: string | null;
}

const recursiveBmacRequest = async <T = unknown>(
  endpoint?: string,
  items?: Array<T>,
): Promise<Array<T>> => {
  if (!endpoint) return items || [];
  const response: BmacResponse<T> = await fetch(endpoint, {
    // @ts-ignore
    headers: { 'Content-Type': 'application/json', ...authHeaders },
  }).then((res) => res.json());

  const allItems = [...(items || []), ...(response.data || [])];
  if (response.next_page_url)
    return recursiveBmacRequest(response.next_page_url, allItems);
  return allItems;
};

const MIN_UNICORN_DONATION = 30;
const getUnicornBmacSupporters = (
  supporters: Array<OneTimeSupporter>,
  year: string,
): Array<OneTimeSupporter> =>
  supporters.filter(
    (it) =>
      it.support_coffees * parseFloat(it.support_coffee_price) >=
        MIN_UNICORN_DONATION && it.support_updated_on.startsWith(year),
  );

const unicornToManualSponsor = (unicorn: OneTimeSupporter): ManualSponsor => ({
  name: unicorn.supporter_name || unicorn.payer_name,
  photo: `https://source.boringavatars.com/beam/96/${encodeURIComponent(
    unicorn.supporter_name || unicorn.payer_name,
  )}`,
});

const memberToGitHubSponsor = (member: Member): Sponsor => ({
  name: member.supporter_name || member.payer_name,
  photo: `https://source.boringavatars.com/beam/96/${encodeURIComponent(
    member.supporter_name || member.payer_name,
  )}`,
});

const calcMembershipMonthlyPrice = (
  coffees: number,
  coffeePrice: string,
  type: 'month' | 'year',
): number => {
  const initial = coffees * parseFloat(coffeePrice);
  if (type === 'month') return initial;
  return +(initial / 12).toFixed(2);
};

const getRightMembers = async (year: number): Promise<Array<Member>> => {
  const members = await recursiveBmacRequest<Member>(
    'https://developers.buymeacoffee.com/api/v1/subscriptions?status=active',
  ).then((items) =>
    items.filter(
      (it) =>
        it.subscription_updated_on.startsWith(year.toString()) &&
        it.stripe_status === 'active',
    ),
  );
  const rydah = members.find((it) => it.payer_name.includes('@RydahDoesTech'));
  // eslint-disable-next-line camelcase
  if (rydah) rydah.membership_level_id = 628;
  const otherMembers = members.filter(
    (it) => !it.payer_name.includes('@RydahDoesTech'),
  );
  return rydah ? [rydah, ...otherMembers] : otherMembers;
};

export const executeBmac = async (): Promise<{
  members: Array<SponsorCategory>;
  oneTime: Array<ManualSponsor>;
}> => {
  const thisYear = new Date().getFullYear();
  const rightMembers = await getRightMembers(thisYear);

  const oneTime = await recursiveBmacRequest<OneTimeSupporter>(
    'https://developers.buymeacoffee.com/api/v1/supporters',
  );

  const membersGroupedBySubId = groupBy(
    rightMembers,
    (it) => membershipIds[it.membership_level_id],
  );
  const sponsorCategories: Array<SponsorCategory> = Object.keys(
    membersGroupedBySubId,
  ).map((key) => {
    const categorySponsors = membersGroupedBySubId[key as BmacMemberTier].map(
      memberToGitHubSponsor,
    );
    const totalEarningsPerMonth: number = membersGroupedBySubId[
      key as BmacMemberTier
    ].reduce(
      (prev, curr) =>
        prev +
        calcMembershipMonthlyPrice(
          curr.subscription_coffee_num,
          curr.subscription_coffee_price,
          curr.subscription_duration_type,
        ),
      0,
    );

    return {
      key,
      sponsors: categorySponsors,
      sponsorsCount: categorySponsors.length,
      totalEarningsPerMonth,
    } as SponsorCategory;
  });

  return {
    members: sponsorCategories,
    oneTime: getUnicornBmacSupporters(oneTime, thisYear.toString()).map(
      unicornToManualSponsor,
    ),
  };
};
