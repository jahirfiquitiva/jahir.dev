import fs from 'fs';
import path from 'path';

// eslint-disable-next-line import/no-extraneous-dependencies
import pkg from 'rss-to-json';
const { parse } = pkg;

// async await
(async () => {
  const rss = await parse('https://jahirfiquitiva.substack.com/feed');
  rss.items.push({
    title: 'Taking a priori care of your future job',
    link: 'https://medium.com/@jahirfiquitiva/taking-a-priori-care-of-your-future-job-7ed24cf18ed2',
    published: 1523577600000,
    enclosures: [
      {
        url: '/static/images/blog/a-priori-care.jpeg',
      },
    ],
  });
  rss.items.push({
    title: 'What Google missed in their guidelines for Material Design iconography',
    // eslint-disable-next-line max-len
    description: 'Details that go beyond the official guidelines to create proper Material Design iconography.',
    link: 'https://stories.uplabs.com/what-google-missed-in-their-guidelines-for-material-design-iconography-daf9f88000ec',
    published: 1436140800000,
    enclosures: [
      {
        url: '/static/images/blog/materialdesignicons-by-kevin-aguilar.png',
      },
    ],
  });
  const outdir = path.join(process.cwd(), 'src', 'data');
  const outfile = path.join(outdir, 'blog.json');
  fs.writeFileSync(outfile, JSON.stringify(rss, null, 2));
})();
