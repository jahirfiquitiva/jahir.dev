export interface BaseInspirationSite {
  title: string;
  link?: string;
  domain?: string;
}

export interface InspirationSite extends BaseInspirationSite {
  icon?: string;
}
