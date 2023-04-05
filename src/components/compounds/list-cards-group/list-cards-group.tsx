import type { FC } from '@/types';

import { GroupHeader, GroupSection } from './list-cards-group.styles';

const GroupSectionHeader: FC<{ header?: string }> = ({ header }) => {
  if (!header) return null;
  return (
    <GroupHeader>
      <h4>{header}</h4>
      <hr />
    </GroupHeader>
  );
};

interface ListCardsGroupProps {
  id: string;
  title: string;
  header?: string;
}

export const ListCardsGroup: FC<ListCardsGroupProps> = (props) => {
  const { id, title, header, css } = props;

  return (
    <GroupSection id={id} aria-label={title} title={title} css={css}>
      <GroupSectionHeader header={header} />
      {props.children}
    </GroupSection>
  );
};
