export type SponsorsCategoryKey = 'ball' | 'rocket' | 'diamond' | 'unicorn';

export interface ManualSponsor {
  name: string;
  link?: string;
  photo?: string;
  username?: string;
  category?: SponsorsCategoryKey;
}

export const manualSponsors: Array<ManualSponsor> = [
  {
    name: 'Patryk Goworowski',
    link: 'https://twitter.com/PGoworowski',
    photo: 'https://unavatar.io/twitter/PGoworowski',
  },
  {
    name: 'RandleP',
    link: 'https://play.google.com/store/apps/dev?id=6241880976999342555',
    username: 'RandleP',
  },
  {
    name: 'Sherry Sabatine',
    photo:
      'https://unavatar.io/Sherry_Sabatine?fallback=https://www.shersphotography.com/assets/public/images/Background%20Images-Me/-53sawq.png',
    link: 'http://www.ssabatinephotography.com/',
  },
  {
    name: 'Travis Hall',
    photo: 'https://unavatar.io/twitter/RippedThemer',
    link: 'https://twitter.com/RippedThemer',
  },
  {
    name: 'Patryk Michalik',
    photo: 'https://unavatar.io/twitter/patrykmichalik_',
    link: 'https://patrykmichalik.com',
  },
  {
    name: 'Eduardo Pratti',
    photo: 'https://unavatar.io/twitter/edpratti',
    link: 'https://pratti.design/',
  },
  {
    name: 'Corbin Crutchley',
    photo: 'https://unavatar.io/twitter/crutchcorn',
    link: 'https://crutchcorn.dev',
  },
];
