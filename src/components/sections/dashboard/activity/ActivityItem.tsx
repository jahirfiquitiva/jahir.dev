import type { FC } from '@/types';
import { styled } from '~/stitches';

const SmallText = styled('small', {
  display: 'block',
  mb: 'calc($$verticalContentPadding / 8)',
});

interface ActivityItemProps {
  title?: string;
}

export const ActivityItem: FC<ActivityItemProps> = (props) => {
  return (
    <>
      {props.title ? (
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
