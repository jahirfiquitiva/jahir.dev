// Source: https://github.com/jchen1/website/tree/master/scripts
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const bundle = require('../.next/build-manifest.json');

const prefix = '.next';
const outdir = path.join(process.cwd(), prefix, 'analyze');
const outfileJSON = path.join(outdir, 'bundle.json');

const pageSizes = Object.keys(bundle.pages).map((p) => {
  const files = bundle.pages[p];
  const size = files
    .map((filename) => {
      const fn = path.join(process.cwd(), prefix, filename);
      const bytes = fs.readFileSync(fn);
      const gzipped = zlib.gzipSync(bytes);
      return gzipped.byteLength;
    })
    .reduce((s, b) => s + b, 0);

  return { path: p, size };
});

try {
  fs.mkdirSync(outdir);
} catch (e) {
  // may already exist
}

fs.writeFileSync(outfileJSON, JSON.stringify(pageSizes, null, 2));
