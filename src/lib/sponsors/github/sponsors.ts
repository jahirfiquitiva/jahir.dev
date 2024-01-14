import { buildBoringAvatarUrl } from '@/utils/boring-avatars';

import { getSponsorsGraphQLResponse } from './query';

export const getGitHubSponsors = async (): Promise<{
  sponsors: Array<ReadableSupporter>;
  oneTime: Array<ReadableSupporter>;
}> => {
  const { data } = await getSponsorsGraphQLResponse().catch(null);
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  const { nodes: tiers = [] } = data?.user?.sponsorsListing?.tiers || {};

  let monthlySponsors: Array<ReadableSupporter> = [];
  let oneTimeSponsors: Array<ReadableSupporter> = [];

  tiers.forEach((tier) => {
    const { monthlyPriceInDollars, isOneTime } = tier;
    const people: Array<ReadableSupporter> = (
      tier.adminInfo?.sponsorships.nodes || []
    )
      .filter((it) => it.isActive || isOneTime)
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
    if (isOneTime) {
      oneTimeSponsors = [...oneTimeSponsors, ...people];
    } else {
      monthlySponsors = [...monthlySponsors, ...people];
    }
  });

  return {
    sponsors: monthlySponsors,
    oneTime: oneTimeSponsors,
  };
};
