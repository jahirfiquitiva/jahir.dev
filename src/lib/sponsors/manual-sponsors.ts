export type SponsorsCategoryKey =
  | 'ball'
  | 'rocket'
  | 'diamond'
  | 'unicorn';

interface ManualSponsor {
  name: string;
  link?: string;
  photo?: string;
  username?: string;
  category?: SponsorsCategoryKey;
}

export const manualSponsors: Array<ManualSponsor> = [
  {
    name: 'Tim Austin',
    link: 'https://play.google.com/store/apps/dev?id=4682932724915294631',
    username: 'drumdestroyer',
  },
  {
    name: 'Patryk Goworowski',
    link: 'https://twitter.com/PGoworowski',
    photo: 'https://unavatar.io/twitter/PGoworowski',
    category: 'ball',
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
    name: 'ExtraVital',
    photo:
      'https://lh3.googleusercontent.com/O2NP4-dGPk_QiUvAjRSNOLJwIDzghxGeFj0FDqB3dkEW_T3lhMHH1SgTxN7JmU_a_Q=w288-h288-n-rw',
    link: 'https://play.google.com/store/apps/dev?id=5234901489834236726',
  },
  {
    name: 'Vukašin Anđelković',
    photo:
      'https://unavatar.io/twitter/vukkashin?fallback=https://vukashin.xyz/content/Avatar-2.png.webp',
    link: 'https://vukash.in/',
  },
  {
    name: 'Jaden Pleasants',
    photo: 'https://unavatar.io/twitter/YaBoiBurner',
    link: 'https://twitter.com/YaBoiBurner',
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
  {
    name: 'Dany Gee',
    photo: 'https://unavatar.io/github/DanyGee',
    link: 'https://github.com/DanyGee',
  },
  {
    name: 'Evelyn Hathaway',
    photo:
      'https://unavatar.io/github/evelynhathaway?fallback=https://evelyn.dev/static/bdcd5bb0827ad6143f8e7d1ade45ae20/c1f5f/headshot.webp',
    link: 'https://evelyn.dev/',
  },
];
