import cx from 'classix';
import type { PropsWithChildren } from 'react';

import { Heading } from '@/components/core/heading';
import { Section } from '@/components/core/section';

export default function DashboardLayout(props: PropsWithChildren) {
  return (
    <Section id={'dashboard'} className={cx('gap-32')}>
      <Heading shadow={'blue'} from={'blue'} to={'green'}>
        Dashboard
      </Heading>
      {props.children}
    </Section>
  );
}
