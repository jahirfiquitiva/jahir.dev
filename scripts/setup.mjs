// This script is based on Lee Rob's setup script:
// https://github.com/leerob/leerob.io/blob/main/lib/setup.mjs
import { promises as fs } from 'fs';
import path from 'path';

// eslint-disable-next-line import/no-extraneous-dependencies
import dotenv from 'dotenv';

const template = `---
title: 'Hello, world!'
excerpt: 'This is an excerpt or description'
date: '2023-01-28'
keywords: 'hello|world|keyword'
hero: hello-world/hero.jpg
color: #123
---

Hello, World!`;

const deleteFolderRecursive = async (path) => {
  const stat = await fs.stat(path).catch(() => null);
  if (!stat) return;
  if (stat.isDirectory()) {
    const files = await fs.readdir(path);
    await Promise.all(
      files.map((file) => deleteFolderRecursive(`${path}/${file}`)),
    );
    await fs.rmdir(path);
  } else {
    await fs.unlink(path);
  }
};

(async () => {
  dotenv.config();

  if (process.env.IS_TEMPLATE === 'false') {
    // Before the setup, we check the environment variable `IS_TEMPLATE`.
    // In this repository, its value is initially set to true, but on
    // my personal site, I override it to false. This means that when
    // folks clone it for the first time, all my personal content will
    // be deleted, so they can start fresh.
    return;
  }

  const contentDir = path.join(process.cwd(), 'content');
  const foldersToDelete = [
    contentDir,
    path.join(process.cwd(), 'public', 'apps'),
    path.join(process.cwd(), 'public', 'frames'),
    path.join(process.cwd(), 'public', 'share'),
    path.join(process.cwd(), 'public', 'media'),
    path.join(process.cwd(), 'src', 'assets', 'images'),
    path.join(process.cwd(), 'src', 'data'),
  ];

  const deletePromises = foldersToDelete.map(deleteFolderRecursive);
  // eslint-disable-next-line no-console
  await Promise.all(deletePromises).catch(console.error);
  await fs.mkdir(contentDir).catch();
  await fs
    .writeFile(path.join(contentDir, 'hello-world.mdx'), template)
    .catch();
})();
