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
                    isActive
                    isOneTimePayment
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

/* eslint-disable @typescript-eslint/ban-ts-comment */
export const getSponsorsGraphQLResponse =
  async (): Promise<SponsorsResponse> => {
    return fetch('https://api.github.com/graphql', {
      method: 'POST',
      // @ts-ignore
      headers: { 'Content-Type': 'application/json', ...authHeaders },
      body: JSON.stringify({ query: graphQlQuery }),
    }).then((res) => res.json());
  };
