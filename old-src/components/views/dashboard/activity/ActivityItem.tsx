import type { FC } from '@/old/types';
import { styled } from '~/stitches';

const SmallText = styled('small', {
  display: 'block',
  mb: 'calc($$verticalContentPadding / 12)',
});

interface ActivityItemProps {
  title?: string;
  hideTitle?: boolean;
}

export const ActivityItem: FC<ActivityItemProps> = (props) => {
  return (
    <>
      {props.title && !props.hideTitle ? (
        <div>
          <SmallText>{props.title}</SmallText>
          {props.children}
        </div>
      ) : (
        props.children
      )}
    </>
  );
};
