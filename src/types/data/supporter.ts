export interface Supporter {
  name: string;
  link?: string;
  photo?: string;
}

interface SupporterCategory {
  id?: string;
  name: string;
  key: string;
  description?: string;
  supporters?: Array<Supporter>;
}

export const supporters: Array<SupporterCategory> = [
  {
    id: '589',
    name: '💎 Diamond',
    key: 'diamond',
  },
  {
    id: '588',
    name: '⚡️ Lightning',
    key: 'lightning',
  },
  {
    id: '587',
    name: '🤖 Robot',
    key: 'robot',
  },
  {
    id: '586',
    name: '🚀 Rocket',
    key: 'rocket',
    supporters: [
      {
        name: 'Patryk Goworowski',
        link: 'https://twitter.com/PGoworowski',
        photo:
          'https://unavatar.io/twitter/PGoworowski?fallback=https://source.boringavatars.com/',
      },
    ],
  },
  {
    id: '585',
    name: '🔮 Crystal Ball',
    key: 'crystal',
    supporters: [
      {
        name: 'one4studio',
        link: 'https://one4studio.com/',
        photo:
          'https://unavatar.io/github/one4studio?fallback=https://source.boringavatars.com/',
      },
      {
        name: 'RandleP',
        link: 'https://play.google.com/store/apps/dev?id=6241880976999342555',
        photo:
          'https://unavatar.io/github/RandleP?fallback=https://source.boringavatars.com/',
      },
      {
        name: 'CrazyMarvin',
        link: 'https://github.com/CrazyMarvin',
        photo: 'https://unavatar.io/github/CrazyMarvin',
      },
    ],
  },
  {
    name: '🦄 Unicorn',
    key: 'unicorn',
    description: 'Special one-time supporters',
    supporters: [
      {
        name: 'Sherry Sabatine',
        photo:
          'https://unavatar.io/sherry._.sabatine?fallback=https://s3-img.pixpa.com/com/large/37571/newdo-2-pw69wd.jpg',
        link: 'http://www.ssabatinephotography.com/',
      },
      {
        name: 'Travis Hall',
        photo:
          'https://unavatar.io/twitter/RippedThemer?fallback=https://source.boringavatars.com/',
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
        photo:
          'https://unavatar.io/twitter/YaBoiBurner?fallback=https://source.boringavatars.com/',
        link: 'https://twitter.com/YaBoiBurner',
      },
      {
        name: 'Patryk Michalik',
        photo:
          'https://unavatar.io/twitter/patrykmichalik_?fallback=https://source.boringavatars.com/',
        link: 'https://patrykmichalik.com',
      },
      {
        name: 'Eduardo Pratti',
        photo:
          'https://unavatar.io/twitter/edpratti?fallback=https://source.boringavatars.com/',
        link: 'https://pratti.design/',
      },
      {
        name: 'Dany Gee',
        photo: 'https://unavatar.io/github/DanyGee?fallback=https://source.boringavatars.com/',
        link: 'https://github.com/DanyGee',
      },
      {
        name: 'Evelyn Hathaway',
        photo:
          'https://unavatar.io/github/evelynhathaway?fallback=https://evelyn.dev/static/bdcd5bb0827ad6143f8e7d1ade45ae20/c1f5f/headshot.webp',
        link: 'https://evelyn.dev/',
      },
    ],
  },
];
