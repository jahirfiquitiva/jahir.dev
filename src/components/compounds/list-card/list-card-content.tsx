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
}

export const ListCardContent: FC<ListCardContentProps> = (props) => {
  const { title, description, css } = props;
  return (
    <StyledContentContainer css={css}>
      <StyledTitle>{title}</StyledTitle>
      {Boolean(description) && <StyledExcerpt>{description}</StyledExcerpt>}
      {props.children}
    </StyledContentContainer>
  );
};

interface ListCardInfoItemProps {
  title?: string;
  iconPath?: string;
}

export const ListCardInfoItem: FC<ListCardInfoItemProps> = (props) => {
  const { title, iconPath } = props;
  return (
    <StyledInfoSpan title={title}>
      {iconPath ? <Icon path={iconPath} size={0.73} /> : null}
      {props.children}
    </StyledInfoSpan>
  );
};
