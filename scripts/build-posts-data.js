const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const removeMd = require('remove-markdown');

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

const getPostDescription = (
  description,
  content,
  defaultDescription,
  maxCharacters,
) => {
  if (description && (description?.length || 0) > 0) return description;
  if (!content || (content?.length || 0) <= 0) {
    return defaultDescription || '';
  }
  const noTitles = content
    ?.split(/[\r\n]+/gm)
    ?.filter((it) => !it.startsWith('#'))
    ?.join('  ')
    ?.trim();
  const plainText = removeMd(noTitles);
  const noNewLines = plainText.replace(/[\r\n]+/gm, '  ').trim();
  const splitContent = noNewLines.substring(0, maxCharacters || 140);
  return splitContent.length > 0
    ? `${splitContent}...`
    : defaultDescription || '';
};

const transformPostToMatter = (post) => {
  const slug = post.filename.replace(/^.*[\\/]/, '').slice(0, -3);
  const { data: matterData, content: actualContent } = matter(post.content);
  const { link, title, date, excerpt } = matterData;
  const isInProgress = matterData['in-progress'] === true;
  if (isInProgress) return null;
  return {
    slug,
    link,
    title,
    date,
    excerpt: getPostDescription(excerpt, actualContent),
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
