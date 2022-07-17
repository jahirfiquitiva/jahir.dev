/* eslint-disable no-console */
// eslint-disable-next-line import/no-extraneous-dependencies
import { getPlaiceholder } from 'plaiceholder';

const [filename] = process.argv.slice(2);

try {
  getPlaiceholder(`/../public/static/images/${filename}`, { size: 12 }).then(
    ({ base64, img }) =>
      console.log({
        base64,
        img,
      }),
  );
} catch (err) {
  console.error(err);
}
