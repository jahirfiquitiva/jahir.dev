export interface SpotlightOption {
  id: string;
  title: string;
  shortcuts?: Array<string>;
  keywords?: string;
  url?: string;
  icon?: string;
}

export type SpotlightOptionsSection = 'Pages' | 'Social';

export type SpotlightOptionsParentSection = 'Projects' | 'Blog';
export type SpotlightOptionsForParent = {
  [Key in SpotlightOptionsParentSection]?: Array<SpotlightOption>;
};

export type SpotlightOptions = {
  [Key in SpotlightOptionsSection]?: Array<SpotlightOption>;
} & {
  withOptions?: SpotlightOptionsForParent;
};
