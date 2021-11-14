export interface BaseInspirationSite {
  title: string;
  link: string;
  description?: string;
}

export interface InspirationSite extends BaseInspirationSite {
  favicon?: string;
}
