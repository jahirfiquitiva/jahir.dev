import { cx } from 'classix';

import { type ComponentProps, tw } from '@/tw';

const dividerClasses = tw`
  my-20
  mx-0
  h-1
  w-full
  border-none
  bg-divider
  desktop:my-28
`;

export const Divider = (props: ComponentProps<'hr'>) => {
  return <hr {...props} className={cx(dividerClasses, props.className)} />;
};
