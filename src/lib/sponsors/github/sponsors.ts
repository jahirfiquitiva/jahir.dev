import { getSponsorsGraphQLResponse } from './query';

export const getGitHubSponsors = async (): Promise<{
  sponsors: Array<ReadableSupporter>;
  oneTime: Array<ReadableSupporter>;
}> => {
  const { data } = await getSponsorsGraphQLResponse().catch();
  const { nodes: tiers } = data?.user?.sponsorsListing?.tiers || {};

  let monthlySponsors: Array<ReadableSupporter> = [];
  let oneTimeSponsors: Array<ReadableSupporter> = [];

  tiers?.forEach((tier) => {
    const { monthlyPriceInDollars, isOneTime } = tier;
    const people: Array<ReadableSupporter> = (
      tier.adminInfo?.sponsorships?.nodes || []
    )
      .filter((it) => it.isActive || isOneTime)
      .map((item) => {
        const { sponsorEntity: sponsor } = item;
        const name = sponsor.name || sponsor.login;
        return {
          name,
          photo:
            sponsor.avatarUrl ||
            `https://source.boringavatars.com/beam/96/${encodeURIComponent(
              name,
            )}`,
          link: sponsor.websiteUrl || `https://github.com/${sponsor.login}`,
          amount: monthlyPriceInDollars,
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
