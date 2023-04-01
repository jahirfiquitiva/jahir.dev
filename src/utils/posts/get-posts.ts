import substackData from '@/data/blog.json';
import type { Post } from '@/types';

type SubstackPost = (typeof substackData)['items'][number];

const substackEnclosureToImage = (enclosure?: string): string | null => {
  if (!enclosure) return null;
  if (!enclosure.startsWith('https://substackcdn.com/image/fetch'))
    return enclosure;
  const parts = enclosure.split('/');
  const lastPart = parts[parts.length - 1];
  return decodeURIComponent(lastPart);
};

const substackPostToWebsitePost = (post: SubstackPost): Post => {
  const postDate = new Date(post.published);
  return {
    title: post.title,
    excerpt: post.description || null,
    date: postDate.toISOString(),
    hero: substackEnclosureToImage(post.enclosures?.[0]?.url) || null,
    link: post.link,
    year: postDate.getFullYear(),
  };
};

export const getAllPosts = (): Array<Post> =>
  substackData?.items?.map(substackPostToWebsitePost || []);
