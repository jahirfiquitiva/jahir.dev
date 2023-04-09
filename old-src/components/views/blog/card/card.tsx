import { useMemo } from 'react';

import {
  ListCard,
  ListCardContent,
  ListCardInfoItem,
} from '@/old/components/compounds';
import { InfoContainer } from '@/old/components/compounds/list-card/list-card.styles';
import {
  mdiClockOutline,
  mdiEyeOutline,
  calendarOutline,
} from '@/old/components/icons';
import { useRequest } from '@/old/hooks/use-request';
import type { FC, Post } from '@/old/types';
import { formatDate } from '@/old/utils/format/format-date';

import { BlogCardHero, Published } from './card.styled';

interface BlogCardProps {
  post: Post;
}

export const getShortDomainForBlog = (rightLink?: string) => {
  if (!rightLink) return '';
  try {
    const url = new URL(rightLink);
    return url.hostname.replace('www.', '');
  } catch (e) {
    return '';
  }
};

// eslint-disable-next-line max-lines-per-function
export const BlogCard: FC<BlogCardProps> = (props) => {
  const { post } = props;
  const { link, slug, devToId } = post;

  const { data: views } = useRequest<{ total?: string }>(
    `/api/views/blog--${slug}?devToId=${devToId}`,
  );

  const rightLink = link && link.length > 0 ? link : `/blog/${slug}`;
  const domain = getShortDomainForBlog(rightLink);

  const extraHeroProps = useMemo(() => {
    if (post?.heroMeta && post?.heroMeta.blur64) {
      return { placeholder: 'blur', blurDataURL: post?.heroMeta.blur64 } as {
        placeholder: 'blur' | 'empty';
        blurDataURL?: string;
      };
    }
    return {};
  }, [post?.heroMeta]);

  return (
    <ListCard
      title={`Blog post: ${post?.title}`}
      href={rightLink}
      imageUrl={post.hero || ''}
      color={post.color}
    >
      <BlogCardHero
        src={post.hero || ''}
        alt={`Cover image for blog "${post.title}"`}
        width={post?.heroMeta?.size?.width || 144}
        height={post?.heroMeta?.size?.height || 72}
        {...extraHeroProps}
      />
      <ListCardContent title={post.title} description={post.excerpt}>
        {domain ? (
          <Published>
            Published on <span>{domain}</span>
          </Published>
        ) : null}
        <InfoContainer>
          <ListCardInfoItem
            title={`Published on ${formatDate(post.date, {
              year: 'numeric',
              month: 'long',
            })}`}
            iconPath={calendarOutline}
          >
            {formatDate(post.date, { year: undefined, month: 'short' })}
          </ListCardInfoItem>
          {(post.readingTime?.minutes || 0) > 0 ? (
            <ListCardInfoItem
              title={`Reading time: ${post.readingTime?.minutes} minutes`}
              iconPath={mdiClockOutline}
            >
              {post.readingTime?.text}
            </ListCardInfoItem>
          ) : null}
          {views?.total && +(views?.total || '0') > 2 ? (
            <ListCardInfoItem
              title={`Blog post viewed ${views?.total} times`}
              iconPath={mdiEyeOutline}
            >
              {views?.total} views
            </ListCardInfoItem>
          ) : null}
        </InfoContainer>
      </ListCardContent>
    </ListCard>
  );
};
