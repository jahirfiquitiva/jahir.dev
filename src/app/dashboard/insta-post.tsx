import { InstaPhoto } from '@/components/views/dashboard/insta-photo';
import { fetchInstaFeed } from '@/lib/instagram/instagram';
import { getRandomItem } from '@/utils/random';

// Update data once every 12 hours
export const revalidate = 43200;

export const InstaPost = async () => {
  const instagram = await fetchInstaFeed().catch(() => []);
  return <InstaPhoto post={getRandomItem(instagram)} />;
};
