interface SponsorEntity {
  login: string;
  avatarUrl?: string;
  name?: string | null;
  websiteUrl?: string | null;
}

interface Sponsorships {
  totalRecurringMonthlyPriceInDollars: number;
  nodes: Array<{
    sponsorEntity: SponsorEntity;
    tierSelectedAt?: string; // timestamp
    isActive?: boolean;
    isOneTimePayment?: boolean;
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
