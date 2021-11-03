const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const readFileContent = (dirname, filename) =>
  new Promise((resolve, reject) => {
    if (!filename || !filename.endsWith('mdx')) return null;
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
  const { data: matterData, content: actualContent } = matter(post.content);
  const { link } = matterData;
  const isInProgress = matterData['in-progress'] === true;
  if (isInProgress) return null;
  return {
    slug,
    link,
  };
};

const getPostsToRedirect = async () => {
  const filesContents = await readFiles('./data/blog/');
  return filesContents
    .filter((it) => it)
    .map(transformPostToMatter)
    .filter((it) => it.link && it.link.length > 0);
};

module.exports = { getPostsToRedirect };
