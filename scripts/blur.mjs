/* eslint-disable no-console */
import fs from 'fs';
import path from 'path';

// eslint-disable-next-line import/no-extraneous-dependencies
import { getPlaiceholder } from 'plaiceholder';

const [page, placeholderSize = 12] = process.argv.slice(2);

const getLocalFilePath = (filename) => `/../public/static/images/${filename}`;

const getPlaceholdersForImages = async (page, images) => {
  if (!images || !images.length) return [];

  const imagesExt = page === 'about' ? 'jpg' : page === 'contact' ? 'png' : '';

  const promises = images.map((imageKey) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve) => {
      const placeholder = await getPlaiceholder(
        getLocalFilePath(`${page}/${imageKey}.${imagesExt}`),
        { size: placeholderSize },
      );
      if (!placeholder) return resolve({});
      const { img, base64 } = placeholder;
      return resolve({
        key: imageKey,
        page,
        width: img.width,
        height: img.height,
        base64,
      });
    });
  });

  return Promise.all(promises).catch(() => []);
};

const aboutImagesCount = 9;
const contactImagesCount = 9;
const images =
  page === 'about'
    ? [...Array(aboutImagesCount).keys()]
    : page === 'contact'
    ? [...Array(contactImagesCount).keys()]
    : [];

if (images.length) {
  getPlaceholdersForImages(page, images).then((results) => {
    if (!results || !results.length) return;
    const obj = {};
    results.forEach((result) => {
      obj[result.key] = result;
    });
    const fileContent = `/* eslint-disable max-len */\nconst imagesBlurData = ${JSON.stringify(
      obj,
      null,
      2,
    )};\nexport default imagesBlurData;`;
    const outdir = path.join(process.cwd(), 'src', 'blur');
    const outfile = path.join(outdir, `${page}.ts`);
    fs.writeFileSync(outfile, fileContent);
  });
}
