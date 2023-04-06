import { promises as fs } from 'fs';
import path from 'path';

// eslint-disable-next-line import/no-extraneous-dependencies
import dotenv from 'dotenv';

const template = `---
title: 'Hello, world!'
excerpt: 'This is an excerpt or description'
date: '${new Date().toISOString()}'
keywords: 'hello|world|keyword'
hero: hello-world/hero.jpg
---

Hello, World!`;

const deleteFolderRecursive = async (path) => {
  const stat = await fs.stat(path).catch(() => (null));
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
    // This means it's not the template, it's my legit site
    // I orderride the env variable for my site. This means that when
    // folks clone this repo for the first time, it will delete my personal content
    return;
  }

  const contentDir = path.join(process.cwd(), 'content');
  const foldersToDelete = [
    contentDir,
    path.join(process.cwd(), 'public', 'apps'),
    path.join(process.cwd(), 'public', 'frames'),
    path.join(process.cwd(), 'public', 'share'),
    path.join(process.cwd(), 'public', 'static'),
  ];

  const deletePromises = foldersToDelete.map(deleteFolderRecursive);
  // eslint-disable-next-line no-console
  await Promise.all(deletePromises).catch(console.error);
  await fs.mkdir(contentDir).catch();
  await fs.writeFile(path.join(contentDir, 'hello-world.mdx'), template).catch();
})();
