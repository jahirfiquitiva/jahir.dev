type CategoryKey = 'star' | 'ball' | 'rocket' | 'diamond';

interface SponsorsCategory {
  key: CategoryKey;
  name: string;
  price: number;
  totalEarningsPerMonth: number;
  sponsorsCount: number;
  sponsors: Array<ReadableSupporter>;
}

interface SponsorsResponse {
  categories: Array<SponsorsCategory>;
  unicorns: Array<ReadableSupporter>;
  totalEarningsPerMonth: number;
  sponsorsCount: number;
}
