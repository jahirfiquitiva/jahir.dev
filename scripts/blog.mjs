import fs from 'fs';
import path from 'path';

import pkg from 'rss-to-json';
const { parse } = pkg;

// async await
(async () => {
  const rss = await parse('https://jahirfiquitiva.substack.com/feed');
  const outdir = path.join(process.cwd(), 'src', 'blog');
  const outfile = path.join(outdir, 'blog.json');
  fs.writeFileSync(outfile, JSON.stringify(rss, null, 2));
})();
