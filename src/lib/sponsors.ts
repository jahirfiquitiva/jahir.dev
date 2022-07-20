/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable prefer-destructuring */
import { manualSponsors, SponsorsCategoryKey } from './manual-sponsors';
const { GITHUB_API_TOKEN: githubApiToken = '' } = process.env;
const authHeaders =
  githubApiToken && githubApiToken.length > 0
    ? { Authorization: `Bearer ${githubApiToken}` }
    : {};

const graphQlQuery = `
{
  user(login: "jahirfiquitiva") {
    sponsorsListing {
      id
      tiers(first: 20) {
        nodes {
          ... on SponsorsTier {
            id
            adminInfo {
              sponsorships(first: 100) {
                nodes {
                  ... on Sponsorship {
                    sponsorEntity {
                      ... on User {
                        login
                        avatarUrl
                        name
                        websiteUrl
                      }
                      ... on Organization {
                        login
                        avatarUrl
                        name
                        websiteUrl
                      }
                    }
                    tierSelectedAt
                  }
                }
              }
            }
            monthlyPriceInDollars
            isOneTime
            isCustomAmount
            name
            description
          }
        }
      }
    }
    ... on Sponsorable {
      sponsors {
        totalCount
      }
    }
  }
}
`;

type TimeStamp =
  `${number}-${number}-${number}T${number}:${number}:${number}.${number}Z`;

interface SponsorEntity {
  login: string;
  avatarUrl?: string;
  name?: string;
  websiteUrl?: string;
}

interface Sponsorships {
  nodes: Array<{
    sponsorEntity: SponsorEntity;
    tierSelectedAt: TimeStamp;
  }>;
}

interface SponsorsTier {
  id: string;
  adminInfo?: {
    sponsorships: Sponsorships;
  };
  monthlyPriceInDollars: number;
  isOneTime: boolean;
  isCustomAmount: boolean;
  name: string;
  description?: string;
}

interface SponsorsListing {
  id: string;
  tiers: {
    nodes: Array<SponsorsTier>;
  };
}

interface SponsorsResponse {
  data: {
    user: {
      sponsorsListing: SponsorsListing;
      sponsors: {
        totalCount: number;
      };
    };
  };
}

export interface Sponsor {
  name: string;
  link?: string;
  photo?: string;
  username?: string;
  since?: TimeStamp;
}

export interface SponsorCategory {
  id?: string;
  name: string;
  key: SponsorsCategoryKey;
  sponsors?: Array<Sponsor>;
  price?: number;
}

const getSponsorsGraphQLResponse = async (): Promise<SponsorsResponse> => {
  return fetch('https://api.github.com/graphql', {
    method: 'POST',
    // @ts-ignore
    headers: { 'Content-Type': 'application/json', ...authHeaders },
    body: JSON.stringify({ query: graphQlQuery }),
  }).then((res) => res.json());
};

const priceToTierKey: Record<number, string> = {
  5: '585',
  10: '586',
  25: '587',
  50: '588',
  100: '589',
};

const mapResponseToSponsorsList = (
  response: SponsorsResponse,
): Array<SponsorCategory> => {
  const { user } = response.data;
  // const totalCount = user.sponsors.totalCount;
  const tiers = user.sponsorsListing.tiers.nodes.filter((it) => !it.isOneTime);
  return tiers.map((tier) => {
    const { description, adminInfo, monthlyPriceInDollars } = tier;
    const sponsors = adminInfo?.sponsorships.nodes;
    let name = '';
    if (description) {
      const [title] = description.split(/\r?\n/);
      // eslint-disable-next-line newline-per-chained-call
      name = title.substring(4).replace('Sponsor', '').trim();
    }
    const nameSplit = name.split(' ');
    const key = nameSplit[nameSplit.length - 1].trim().toLowerCase();
    return {
      id: priceToTierKey[monthlyPriceInDollars] || 'x',
      name,
      key,
      sponsors: (sponsors || []).map((it) => {
        const { sponsorEntity: sponsor, tierSelectedAt: since } = it;
        return {
          name: sponsor.name || sponsor.login,
          link: sponsor.websiteUrl || `https://github.com/${sponsor.login}`,
          photo: sponsor.avatarUrl,
          since,
          username: sponsor.login,
        };
      }),
      price: monthlyPriceInDollars,
    };
  }) as Array<SponsorCategory>;
};

export interface SponsorsCategoriesResponse {
  categories?: Array<SponsorCategory>;
  error?: string;
}

const mergeManualAndGitHubSponsors = (
  categories: Array<SponsorCategory>,
): Array<SponsorCategory> => {
  if (!categories || !categories.length) return [];

  const gitHubSponsorsToOverwrite = manualSponsors.filter(
    (it) => !!it.username,
  );
  const categorifiedSponsors = manualSponsors.filter((it) => !!it.category);
  const unicornSponsors: Array<Sponsor> = manualSponsors
    .filter((it) => !it.category && !it.username)
    .map((it) => ({ ...it } as Sponsor));

  const overwrittenCategories = categories.map((category) => {
    const extraSponsors = categorifiedSponsors.filter(
      (it) => it.category === category.key,
    );
    const overwrittenSponsors = category.sponsors?.map((sponsor) => {
      const newSponsorData =
        gitHubSponsorsToOverwrite.filter(
          (it) => it.username === sponsor.username,
        )[0] || {};
      return { ...sponsor, ...newSponsorData };
    }) as Array<Sponsor>;
    return {
      ...category,
      sponsors: [...overwrittenSponsors, ...extraSponsors].map((it) => {
        return { ...it, username: undefined, category: undefined };
      }),
    } as SponsorCategory;
  });

  return [
    ...overwrittenCategories,
    {
      key: 'unicorn',
      name: '🦄 Unicorn',
      sponsors: unicornSponsors,
      price: 1,
    },
  ]
    .sort((a, b) => (b.price || 0) - (a.price || 0))
    .map((it) => ({ ...it, price: undefined } as SponsorCategory));
};

export const fetchSponsors = async (): Promise<SponsorsCategoriesResponse> => {
  try {
    const response = await getSponsorsGraphQLResponse();
    if (response) {
      const githubCategories = mapResponseToSponsorsList(response).filter(
        (it) => (it.price || 0) >= 5,
      );
      return { categories: mergeManualAndGitHubSponsors(githubCategories) };
    }
    return { error: 'No valid response from GitHub' };
  } catch (err) {
    return {
      // @ts-ignore
      error: err?.message || err?.stackTrace.toString() || 'Unexpected error',
    };
  }
};
