const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const readFileContent = (dirname, filename) =>
  new Promise((resolve, reject) => {
    if (!filename || !filename.endsWith('md')) return null;
    fs.readFile(path.join(dirname, filename), 'utf-8', (err, content) => {
      if (err) {
        reject(err);
      } else {
        resolve({
          filename,
          content,
        });
      }
    });
  });

const getFilesInDir = (dirname) =>
  new Promise((resolve, reject) => {
    fs.readdir(dirname, (err, filenames) => {
      if (err) {
        reject(err);
      } else {
        resolve(filenames);
      }
    });
  });

const readFiles = async (dirname) => {
  const files = await getFilesInDir(dirname).catch(() => []);
  return Promise.all(files.map((it) => readFileContent(dirname, it))).catch(
    () => [],
  );
};

const transformPostToMatter = (post) => {
  const slug = post.filename.replace(/^.*[\\/]/, '').slice(0, -3);
  const matterData = matter(post.content).data;
  const { link } = matterData;
  const isInProgress = matterData['in-progress'] === true;
  if (isInProgress) return null;
  return {
    slug,
    link,
  };
};

const buildPostsData = async (isForRedirects = false) => {
  const filesContents = await readFiles('./posts/');
  return filesContents
    .filter((it) => it)
    .map(transformPostToMatter)
    .filter((it) =>
      isForRedirects ? it && it.link && it.link.length > 0 : it,
    );
};

module.exports = { buildPostsData };
