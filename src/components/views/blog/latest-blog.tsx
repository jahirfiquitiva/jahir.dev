import Icon from '@mdi/react';
import cx from 'classix';
import { PropsWithChildren, Suspense } from 'react';

import Loading from '@/app/loading';
import { Heading } from '@/components/core/heading';
import { ButtonLink } from '@/components/core/link/button-link';
import { Section } from '@/components/core/section';
import { mdiEyeOutline, mdiRss } from '@/components/icons/mdi';

import { ProjectsButtons, ProjectsHeader } from './../projects/projects.styles';

export const LatestBlogPost = async (props: PropsWithChildren) => (
  <Section id={'latest-blog'} className={'gap-24'}>
    <ProjectsHeader>
      <Heading
        shadow={'yellow'}
        from={'yellow'}
        to={'orange'}
        $as={'h2'}
        className={cx('text-xl [line-height:inherit]')}
      >
        Latest blog posts
      </Heading>
      <ProjectsButtons>
        <ButtonLink
          title={'RSS feed'}
          href={'/feed.xml'}
          openInNewTab
          outlined
          className={cx(
            'hocus:bg-[rgba(218,91,31,0.12)]',
            'hocus:border-[#da5b1f]',
            'dark:hocus:bg-[rgba(242,101,34,0.18)]',
            'dark:hocus:border-[#f26522]',
          )}
          data-umami-event={'RSS feed'}
        >
          <Icon path={mdiRss} size={0.9} />
          <span>RSS Feed</span>
        </ButtonLink>
        <ButtonLink title={'View all blog posts'} href={'/blog'}>
          <Icon path={mdiEyeOutline} size={0.9} />
          <span>View all</span>
        </ButtonLink>
      </ProjectsButtons>
    </ProjectsHeader>
    <Suspense fallback={<Loading />}>{props.children}</Suspense>
  </Section>
);
