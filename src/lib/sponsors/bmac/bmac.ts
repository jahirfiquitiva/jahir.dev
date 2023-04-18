import { groupBy } from '@/utils/group-by';

const { BMAC_PAT: bmacPat = '' } = process.env;
const authHeaders =
  bmacPat && bmacPat.length > 0 ? { Authorization: `Bearer ${bmacPat}` } : {};

/* eslint-disable @typescript-eslint/ban-ts-comment */
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

const getMembers = async (): Promise<Array<ReadableSupporter>> =>
  recursiveBmacRequest<Member>(
    'https://developers.buymeacoffee.com/api/v1/subscriptions?status=active',
  )
    .then((items) =>
      items.filter(
        (it) => it.stripe_status === 'active' && !it.subscription_is_cancelled,
      ),
    )
    .then((activeMembers) =>
      activeMembers.map((member): ReadableSupporter => {
        const name = member.supporter_name || member.payer_name;
        return {
          name,
          photo: `https://source.boringavatars.com/beam/96/${encodeURIComponent(
            name,
          )}`,
          amount: calculateMembershipMonthlyPrice(
            member.subscription_coffee_num,
            member.subscription_coffee_price,
            member.subscription_duration_type,
          ),
          message: member.subscription_message,
        };
      }),
    )
    .then((members) => members.filter((person) => Boolean(person.name)));

const getOneTimeSupporters = async (): Promise<Array<ReadableSupporter>> =>
  recursiveBmacRequest<OneTimeSupporter>(
    'https://developers.buymeacoffee.com/api/v1/supporters',
  )
    .then((items) => items.filter((it) => !it.is_refunded))
    .then((supporters) =>
      supporters.map((supporter): ReadableSupporter => {
        const name = supporter.supporter_name || supporter.payer_name;
        return {
          name,
          photo: `https://source.boringavatars.com/beam/96/${encodeURIComponent(
            name,
          )}`,
          amount:
            supporter.support_coffees *
            parseFloat(supporter.support_coffee_price),
          message: supporter.support_note,
        };
      }),
    )
    .then((supporters) =>
      // Group because the same person can donate multiple times
      groupBy(
        supporters.filter((person) => Boolean(person.name)),
        (it) => it.name,
      ),
    )
    .then((groups) => {
      // Sum all donations done by the given person
      return Object.keys(groups).map((name) => {
        const donations = groups[name];
        const firstDonation = donations[0];
        return {
          ...firstDonation,
          amount: donations.reduce((p, c) => p + c.amount, 0),
        };
      });
    })
    // Filter the people that have donated at least $50 in total (unicorns)
    .then((supporters) => supporters.filter((person) => person.amount >= 50));

const calculateMembershipMonthlyPrice = (
  coffees: number,
  coffeePrice: string,
  type: 'month' | 'year',
): number => {
  const initial = coffees * parseFloat(coffeePrice);
  if (type === 'month') return initial;
  return Math.round(+(initial / 12));
};

export const getBmacData = async () => {
  const members = await getMembers();
  const oneTimeSupporters = await getOneTimeSupporters();
  return { bmac: { members, oneTimeSupporters } };
};
