import type { SponsorsCategoryKey } from './manual-sponsors';

type TimeStamp =
  `${number}-${number}-${number}T${number}:${number}:${number}.${number}Z`;

interface SponsorEntity {
  login: string;
  avatarUrl?: string;
  name?: string;
  websiteUrl?: string;
}

interface Sponsorships {
  totalRecurringMonthlyPriceInDollars: number;
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

export interface SponsorsResponse {
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
  photo: string;
  username?: string;
  since?: TimeStamp;
}

export interface SponsorCategory {
  id?: string;
  name: string;
  key: SponsorsCategoryKey;
  sponsors?: Array<Sponsor>;
  price?: number;
  totalEarningsPerMonth?: number;
  sponsorsCount?: number;
}

export interface Testimonial {
  content: string;
  sponsor: Sponsor;
}

export interface SponsorsCategoriesResponse {
  categories?: Array<SponsorCategory>;
  testimonials?: Array<Testimonial>;
  error?: string;
  totalEarningsPerMonth?: number;
  sponsorsCount?: number;
}
