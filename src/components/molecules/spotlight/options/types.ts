export interface SpotlightOption {
  id: string;
  title: string;
  shortcuts?: Array<string>;
  keywords: string;
  url?: string;
  icon?: string;
}

export type SpotlightOptionsSection = 'Pages' | 'Social';

export type SpotlightOptions = {
  [Key in SpotlightOptionsSection]?: Array<SpotlightOption>;
};
