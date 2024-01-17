import { buildBoringAvatarUrl } from '@/utils/boring-avatars';

import { getSponsorsGraphQLResponse } from './query';

const getOneTimeSponsorsFromActivity = (
  activity: SponsorsResponse['data']['user']['sponsorsActivities']['nodes'],
): Array<ReadableSupporter> => {
  const groupedOneTimeDonations = activity
    .filter((it) => it.sponsorsTier.isOneTime === true)
    .reduce(
      (prev, curr) => {
        prev[curr.sponsor.login] = {
          ...curr.sponsor,
          amount:
            // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
            (prev?.[curr.sponsor.login]?.amount || 0) +
            curr.sponsorsTier.monthlyPriceInDollars,
          privacyLevel:
            // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
            prev?.[curr.sponsor.login]?.privacyLevel === 'PRIVATE'
              ? 'PRIVATE'
              : curr.currentPrivacyLevel,
        };
        return prev;
      },
      {} as Record<
        string,
        SponsorEntity & { amount: number; privacyLevel: 'PRIVATE' | 'PUBLIC' }
      >,
    );
  return Object.keys(groupedOneTimeDonations)
    .map((login) => {
      if (login === 'shahid921') return null;
      const sponsor =
        groupedOneTimeDonations[login as keyof typeof groupedOneTimeDonations];
      const name = sponsor.name || sponsor.login;
      const isPrivate = sponsor.privacyLevel === 'PRIVATE';
      return {
        name: isPrivate ? 'Private sponsor' : name,
        photo: isPrivate
          ? buildBoringAvatarUrl()
          : sponsor.avatarUrl || buildBoringAvatarUrl(name),
        link: isPrivate
          ? '#'
          : sponsor.websiteUrl || `https://github.com/${sponsor.login}`,
        amount: sponsor.amount,
        isPrivate,
      };
    })
    .filter((it) => Boolean(it)) as Array<ReadableSupporter>;
};

export const getGitHubSponsors = async (): Promise<{
  sponsors: Array<ReadableSupporter>;
  oneTime: Array<ReadableSupporter>;
}> => {
  const { data } = await getSponsorsGraphQLResponse().catch(null);
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  const { nodes: tiers = [] } = data?.user?.sponsorsListing?.tiers || {};
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  const { nodes: activity = [] } = data?.user?.sponsorsActivities || {};
  const oneTimeSponsors = getOneTimeSponsorsFromActivity(activity);

  let monthlySponsors: Array<ReadableSupporter> = [];
  tiers.forEach((tier) => {
    const { monthlyPriceInDollars, isOneTime } = tier;
    if (!isOneTime) {
      const people: Array<ReadableSupporter> = (
        tier.adminInfo?.sponsorships.nodes || []
      )
        .filter((it) => it.isActive)
        .map((item) => {
          const { sponsorEntity: sponsor } = item;
          const name = sponsor.name || sponsor.login;
          const isPrivate = item.privacyLevel === 'PRIVATE';
          return {
            name: isPrivate ? 'Private sponsor' : name,
            photo: isPrivate
              ? buildBoringAvatarUrl()
              : sponsor.avatarUrl || buildBoringAvatarUrl(name),
            link: isPrivate
              ? '#'
              : sponsor.websiteUrl || `https://github.com/${sponsor.login}`,
            amount: monthlyPriceInDollars,
            isPrivate: item.privacyLevel === 'PRIVATE',
          };
        });
      monthlySponsors = [...monthlySponsors, ...people];
    }
  });

  return {
    sponsors: monthlySponsors,
    oneTime: oneTimeSponsors,
  };
};
