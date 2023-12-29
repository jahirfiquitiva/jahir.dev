import { Intro } from '@/components/views/home/intro';

import { TopBlogPosts } from './top-posts';

export default function Home() {
  return (
    <>
      <Intro />
      <TopBlogPosts />
    </>
  );
  // <>
  //   <Intro />
  //   <LatestBlogPost>
  //     <ul
  //       title={'The two most recent blog posts'}
  //       className={'list-none flex flex-col gap-6'}
  //     >
  //       <li>
  //         <BlogPostCard
  //           post={latestBlogPost}
  //           viewsCounter={
  //             <ViewsCounter
  //               slug={`blog--${latestBlogPost.slug}`}
  //               inProgress={latestBlogPost.inProgress}
  //               $sm
  //             />
  //           }
  //           showYear
  //           small
  //         />
  //       </li>
  //       <li>
  //         <BlogPostCard
  //           post={latestBlogPostB}
  //           viewsCounter={
  //             <ViewsCounter
  //               slug={`blog--${latestBlogPostB.slug}`}
  //               inProgress={latestBlogPostB.inProgress}
  //               $sm
  //             />
  //           }
  //           showYear
  //           small
  //         />
  //       </li>
  //     </ul>
  //   </LatestBlogPost>
  //   <Projects title={'Featured projects'} />
  // </>
}
