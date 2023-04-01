import type { ManualSponsor, SponsorsCategoryKey } from './manual-sponsors';

/* eslint-disable @typescript-eslint/ban-ts-comment */
const { BMAC_PAT: bmacPat = '' } = process.env;
const authHeaders =
  bmacPat && bmacPat.length > 0 ? { Authorization: `Bearer ${bmacPat}` } : {};

const membershipIds: Record<number, 'star' | 'ball' | 'rocket' | 'diamond'> = {
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

export const executeBmac = async () => {
  const thisYear = new Date().getFullYear();
  const members = await recursiveBmacRequest<Member>(
    'https://developers.buymeacoffee.com/api/v1/subscriptions?status=active',
  );
  console.error(members);

  const oneTime = await recursiveBmacRequest<OneTimeSupporter>(
    'https://developers.buymeacoffee.com/api/v1/supporters',
  );
  console.error(oneTime);

  return {
    members,
    oneTime: getUnicornBmacSupporters(oneTime, thisYear.toString()).map(
      unicornToManualSponsor,
    ),
  };
};
