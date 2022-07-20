/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable prefer-destructuring */
import { manualSponsors, type SponsorsCategoryKey } from './manual-sponsors';
import { testimonials } from './testimonials';
import type {
  SponsorsResponse,
  SponsorCategory,
  Sponsor,
  SponsorsCategoriesResponse,
} from './types';

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
                totalRecurringMonthlyPriceInDollars
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
    const {
      nodes: sponsors,
      totalRecurringMonthlyPriceInDollars: totalEarningsPerMonth,
    } = adminInfo?.sponsorships || {};
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
      totalEarningsPerMonth,
      sponsorsCount: sponsors?.length || 0,
    };
  }) as Array<SponsorCategory>;
};

export const sizesForTier: Record<SponsorsCategoryKey, number> = {
  unicorn: 24,
  ball: 28,
  rocket: 32,
  robot: 36,
  lightning: 48,
  diamond: 52,
};

const buildPhotoLink = (
  tier: SponsorsCategoryKey,
  name: string,
  photo?: string,
  username?: string,
): string => {
  let photoLink = '';
  if (!photo) {
    photoLink = `https://source.boringavatars.com/beam/${
      sizesForTier[tier]
    }?name=${encodeURI(name)}`;
  }
  if (username) {
    photoLink = `https://unavatar.io/${username}?fallback=${photoLink}`;
  }
  if (photo) {
    if (photo.includes('unavatar.io') && !photo.includes('fallback')) {
      photoLink = `${photo}?fallback=${photoLink}`;
    } else photoLink = photo;
  }
  return photoLink;
};

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
        return {
          ...it,
          username: undefined,
          category: undefined,
          photo: buildPhotoLink(category.key, it.name, it.photo, it.username),
        };
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
      const githubCategories = mapResponseToSponsorsList(response);
      const totalEarningsPerMonth: number = githubCategories.reduce(
        (prev, current) => {
          return prev + (current.totalEarningsPerMonth || 0);
        },
        0,
      );
      const sponsorsCount: number = githubCategories.reduce((prev, current) => {
        return prev + (current.sponsorsCount || 0);
      }, 0);
      const categories = mergeManualAndGitHubSponsors(
        githubCategories.filter((it) => (it.price || 0) >= 5),
      );
      const sponsors = categories.map((it) => it.sponsors).flat();
      return {
        categories,
        testimonials: testimonials.map((testimonial) => {
          return {
            content: testimonial.content,
            sponsor: sponsors.find(
              (it) => it?.name === testimonial.sponsor.name,
            ) || {
              name: 'Anonymous',
              photo: 'https://source.boringavatars.com/beam/28?name=Anonymous',
            },
          };
        }),
        totalEarningsPerMonth,
        sponsorsCount,
      };
    }
    return { error: 'No valid response from GitHub' };
  } catch (err) {
    return {
      // @ts-ignore
      error: err?.message || err?.stackTrace.toString() || 'Unexpected error',
    };
  }
};
