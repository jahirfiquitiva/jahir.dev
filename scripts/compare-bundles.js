// Source: https://github.com/jchen1/website/tree/main/scripts
const fs = require("fs");
const path = require("path");

const currentBundle = require("./../.next/analyze/bundle.json");
const masterBundle = require("./../.next/analyze/main/bundle/bundle.json");

const prefix = ".next";
const outdir = path.join(process.cwd(), prefix, "analyze");
const outfile = path.join(outdir, "bundle-comparison.txt");

function formatBytes(bytes, signed = false) {
  const sign = signed ? (bytes < 0 ? "-" : "+") : "";
  if (bytes === 0) return `${sign}0B`;

  const k = 1024;
  const dm = 2;
  const sizes = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  const i = Math.floor(Math.log(Math.abs(bytes)) / Math.log(k));

  return `${sign}${parseFloat(Math.abs(bytes / Math.pow(k, i)).toFixed(dm))}${
    sizes[i]
  }`;
}

const sizes = currentBundle
  .map(({ path, size }) => {
    const masterSize = masterBundle.find(x => x.path === path);
    const diffStr = masterSize
      ? formatBytes(size - masterSize.size, true)
      : "added";
    return `| \`${path}\` | ${formatBytes(size)} (${diffStr}) |`;
  })
  .concat(
    masterBundle
      .filter(({ path }) => !currentBundle.find(x => x.path === path))
      .map(({ path }) => `| \`${path}\` | removed |`)
  )
  .join("\n");

const output = `# Bundle Size
| Route | Size (gzipped) |
| --- | --- |
${sizes}
<!-- GH BOT -->`;

try {
  fs.mkdirSync(outdir);
} catch (e) {
  // may already exist
}

fs.writeFileSync(outfile, output);