import { getStaticMetadata } from '@/utils/metadata';
import { buildOgImageUrl } from '@/utils/og';

const NotFound = () => {
  return (
    <div className={'flex flex-col w-full flex-1 items-center justify-center'}>
      <p>Not found</p>
    </div>
  );
};

export default NotFound;

export const metadata = getStaticMetadata({
  title: 'Page not found',
  description: "The page you're looking for doesn't exist or has been moved.",
  keywords: ['404', 'not found', 'page not found'],
  image: buildOgImageUrl('404'),
});
