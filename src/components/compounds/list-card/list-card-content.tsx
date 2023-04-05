import Icon from '@mdi/react';

import type { FC } from '@/types';

import {
  StyledContentContainer,
  StyledExcerpt,
  StyledInfoSpan,
  StyledTitle,
} from './list-card.styles';

interface ListCardContentProps {
  title: string;
  description?: string;
  childrenAside?: boolean;
}

export const ListCardContent: FC<ListCardContentProps> = (props) => {
  const { title, description, childrenAside, css } = props;
  return (
    <>
      <StyledContentContainer css={css}>
        <StyledTitle>{title}</StyledTitle>
        {Boolean(description) && <StyledExcerpt>{description}</StyledExcerpt>}
        {Boolean(!childrenAside) && <>{props.children}</>}
      </StyledContentContainer>
      {Boolean(childrenAside) && <>{props.children}</>}
    </>
  );
};

interface ListCardInfoItemProps {
  title: string;
  iconPath: string;
}

export const ListCardInfoItem: FC<ListCardInfoItemProps> = (props) => (
  <StyledInfoSpan title={props.title}>
    <Icon path={props.iconPath} size={0.73} />
    {props.children}
  </StyledInfoSpan>
);
